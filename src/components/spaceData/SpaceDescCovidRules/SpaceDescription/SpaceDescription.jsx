/* eslint-disable no-unused-vars */
import React from 'react';
import './spaceDescription.css';

const path = require('path');

const SpaceDescription = (props) => (
  <div className="dropdown-nav">
    Space Description{' '}
    <span>
      <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
    </span>
    <div className="dropdown-content">
      <span className="space-description">{props.space.description}</span>
    </div>
  </div>
);

export default SpaceDescription;
