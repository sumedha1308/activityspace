const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
