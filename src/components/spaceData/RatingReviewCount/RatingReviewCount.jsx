/* eslint-disable no-unused-vars */
import React from 'react';
import './ratingReviewCount.css';

const path = require('path');

const RatingReviewCount = ({ space }) => (
  <div>
    <div>{space.ratingCount} Ratings</div>
    <div>{space.reviewCount} Reviews</div>
  </div>
);

export default RatingReviewCount;
