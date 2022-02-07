/* eslint-disable no-unused-vars */
import React from 'react';
import './spaceDescCovidSafety.css';
import SpaceDescription from './SpaceDescription/SpaceDescription.jsx';
import CovidSafety from './covidSafety/CovidSafety.jsx';
import Amenities from './Amenities/Amenities.jsx';

const SpaceDescCovidSafety = (props) => (
  <div className="descr-rules-container">
    <SpaceDescription space={props.space} />
    <CovidSafety space={props.space} />
    <Amenities space={props.space} />
  </div>
);

export default SpaceDescCovidSafety;
