/* eslint-disable no-unused-vars */
import React from 'react';
import './covidSafety.css';

const path = require('path');

const covidSafety = (props) => (
  <div className="dropdown-nav">
    Covid Rules{' '}
    <span>
      <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
    </span>
    <div className="dropdown-content">
      <span className="space-description">{props.space.covidSafety}</span>
    </div>
  </div>
);

export default covidSafety;
