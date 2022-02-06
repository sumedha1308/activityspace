/* eslint-disable no-unused-vars */
import React from 'react';
import './button.css';

const path = require('path');

const Button = (props) => (
  <button className="space-modify-btn" onClick={props.onClick}>
    {props.buttonValue}
  </button>
);

export default Button;
