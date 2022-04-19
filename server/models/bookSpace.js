const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSpaceSchema = new Schema({
  activityId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: String,
  day: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  totalHrs: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Cancelled', 'Completed'],
    required: true,
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

module.exports = mongoose.model('BookSpace', bookSpaceSchema);
