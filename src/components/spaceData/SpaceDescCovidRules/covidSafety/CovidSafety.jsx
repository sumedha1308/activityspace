/* eslint-disable no-unused-vars */
import React from 'react';
import './covidSafety.css';

const path = require('path');

const covidSafety = (props) => (
  <div className="dropdown-nav">
    Covid Safety{' '}
    <span>
      <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
    </span>
    <div className="dropdown-content">
      <span className="space-description">{props.space.covidSafety[0]}</span>
      <span className="space-description">{props.space.covidSafety[1]}</span>
      <span className="space-description">{props.space.covidSafety[2]}</span>
      <span className="space-description">{props.space.covidSafety[3]}</span>
    </div>
  </div>
);

export default covidSafety;
