const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  points: { type: Number, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
