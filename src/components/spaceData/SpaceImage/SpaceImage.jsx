/* eslint-disable no-unused-vars */
import React from 'react';
import './spaceImage.css';

const path = require('path');

const SpaceImage = ({ space }) => (
  <div className="space-page-thumbnail-box">
    <img className="space-page-thumbnail" src={path.join(__dirname, 'build', space.thumbnailUrl)} alt="spaceImg" />
  </div>
);

export default SpaceImage;
