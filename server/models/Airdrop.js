const mongoose = require('mongoose');

const AirdropSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  ageDays: {
    type: Number,
    required: true,
  },
  isPremium: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Airdrop', AirdropSchema);
