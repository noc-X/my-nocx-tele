const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Telegraf } = require('telegraf');
const axios = require('axios');
const path = require('path');

// Load environment variables
dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

// Initialize the Express application
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MongoDB connection string is not defined.');
  process.exit(1);
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

// Initialize Telegram bot
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('Telegram Bot Token not provided!');
  process.exit(1);
}

// Bot command handlers
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

// Fetch and display airdrop info
bot.command('airdrop', async (ctx) => {
  const userId = ctx.from.id;
  try {
    const res = await axios.get(`${BACKEND_URL}/api/airdrop/${userId}`);
    const airdropInfo = res.data;
    ctx.reply(`You have ${airdropInfo.points} points. Your account is ${airdropInfo.ageDays} days old and you are ${airdropInfo.isPremium ? 'a' : 'not a'} Telegram Premium user.`);
  } catch (error) {
    console.error(error);
    ctx.reply('Failed to get airdrop info.');
  }
});

bot.command('claim', async (ctx) => {
  const userId = ctx.from.id;
  try {
    const res = await axios.post(`${BACKEND_URL}/api/airdrop/claim/${userId}`);
    ctx.reply(res.data.msg);
  } catch (error) {
    console.error(error);
    ctx.reply('Failed to claim airdrop.');
  }
});

// Launch the bot
bot.launch().then(() => {
  console.log('Telegram bot started');
}).catch((err) => {
  console.error('Failed to start Telegram bot:', err);
  process.exit(1);
});

// Graceful stop for the bot
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Middleware to parse JSON
app.use(express.json());

// Routes
const airdropRoutes = require('./routes/airdrop');
const walletRoutes = require('./routes/wallet');
const presaleRoutes = require('./routes/presale');
const partnershipRoutes = require('./routes/partnership');
const taskRoutes = require('./routes/tasks');
const inviteRoutes = require('./routes/invite');

app.use('/api/airdrop', airdropRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/presale', presaleRoutes);
app.use('/api/partnership', partnershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/invites', inviteRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
