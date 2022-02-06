/* eslint-disable no-unused-vars */
import React from 'react';
import Star from '../Star/Star.jsx';
import './rating.css';

const path = require('path');

const Rating = ({ isLoggedIn, rating, changeRating }) => (
  <div className="avg-rating">
    <Star loginStatus={isLoggedIn} rating={rating} changeRating={changeRating} />
  </div>
);

export default Rating;
