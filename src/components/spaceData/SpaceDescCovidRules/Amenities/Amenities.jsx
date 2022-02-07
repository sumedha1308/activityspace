/* eslint-disable no-unused-vars */
import React from 'react';
import './amenities.css';

const path = require('path');

const Amenities = (props) => (
  <div className="dropdown-nav">
    Amenities{' '}
    <span>
      <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
    </span>
    <div className="dropdown-content">
      <span className="space-description">{props.space.amenities[0]}</span>
      <span className="space-description">{props.space.amenities[1]}</span>
      <span className="space-description">{props.space.amenities[2]}</span>
      <span className="space-description">{props.space.amenities[3]}</span>
      <span className="space-description">{props.space.amenities[4]}</span>
      <span className="space-description">{props.space.amenities[5]}</span>
      <span className="space-description">{props.space.amenities[6]}</span>
      <span className="space-description">{props.space.amenities[7]}</span>
    </div>
  </div>
);

export default Amenities;
