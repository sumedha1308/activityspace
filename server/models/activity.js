const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const activitySchema = new Schema({
  activityId: {
    type: String,
    required: true,
    unique: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  spaceName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  cancellationPolicy: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
  },
  covidSafety: {
    type: [String],
  },
  operatingHours: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
  },
  thumbnailUrl: {
    type: String,
    default: '/Kalighat_temple_Kolkata.jfif',
  },
  avgRating: {
    type: Number,
    default: 0,
    required: true,
  },
  reviewCount: {
    type: Number,
    default: 0,
    required: true,
  },
  ratingCount: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
