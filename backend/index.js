const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const airdropRoutes = require('./routes/airdrop');
const walletRoutes = require('./routes/wallet');
const presaleRoutes = require('./routes/presale');
const partnershipRoutes = require('./routes/partnership');
const taskRoutes = require('./routes/tasks');
const inviteRoutes = require('./routes/invite');
const bot = require('./bot'); // Tambahkan baris ini

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/airdrop', airdropRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/presale', presaleRoutes);
app.use('/api/partnership', partnershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/invites', inviteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
