const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });



bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Please choose an option:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Join Channel', url: 'https://t.me/your_channel' }],
        [{ text: 'Join Global Chat', url: 'https://t.me/your_global_chat' }],
        [{ text: 'Launch App', callback_data: 'launch_app' }]
      ]
    }
  });
});

bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'launch_app') {
    bot.sendMessage(message.chat.id, 'Launching the app...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Open App', url: 'https://t.me/nocturnalx_bot/nyx' }]
        ]
      }
    });
  }
});



module.exports = bot;
