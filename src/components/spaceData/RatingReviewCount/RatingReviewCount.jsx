/* eslint-disable no-unused-vars */
import React from 'react';
import './ratingReviewCount.css';

const path = require('path');

const RatingReviewCount = ({ space }) => (
  <div className="rating-review-count">
    <div className="rating-count">{space.ratingCount} Ratings</div>
    <div className="review-count">{space.reviewCount} Reviews</div>
  </div>
);

export default RatingReviewCount;
