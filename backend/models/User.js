const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  staking: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  airdrop: { type: Number, default: 0 },
  invites: [{ type: String }],
  tasks: [{ type: String }],
  walletAddress: { type: String }
});

module.exports = mongoose.model('User', userSchema);
