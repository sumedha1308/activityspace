/* eslint-disable no-unused-vars */
import React from 'react';
import Star from '../Star/Star.jsx';
import './avgRating.css';

const path = require('path');

const AvgRating = ({ isLoggedIn, avgRating, changeRating }) => (
  <div className="avg-rating">
    <Star loginStatus={isLoggedIn} rating={avgRating} changeRating={changeRating} />
  </div>
);

export default AvgRating;
