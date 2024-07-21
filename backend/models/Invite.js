const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
  telegramId: { type: String, required: true },
  link: { type: String, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Invite', inviteSchema);
