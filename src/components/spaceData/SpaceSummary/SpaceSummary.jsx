/* eslint-disable no-unused-vars */
import React from 'react';
import './spaceSummary.css';
import RatingReviewCount from '../RatingReviewCount/RatingReviewCount.jsx';
import AvgRating from '../avgRating/AvgRating.jsx';

const path = require('path');

const SpaceSummary = (props) => (
  <div className="space-summary">
    <div className="space-page-title">
      Unique {props.space.activityName} space at {props.space.spaceName}
    </div>
    <div className="review-rating-count-location">
      <AvgRating isLoggedIn={props.isLoggedIn} avgRating={props.avgRating} changeRating={props.changeRating} />
      <RatingReviewCount space={props.space} />
      {/* { Div for Space location Icon } */}
      <div className="space-location">
        <a href={`https://www.google.co.in/maps/place/${props.space.location}`} target="_blank" rel="noreferrer">
          <img
            src={`${process.env.PUBLIC_URL} /activityPics/svg/location-icon.svg`}
            alt="location icon"
            className="loc-icon"
          />
        </a>
        <div className="loc-info">{props.space.location}</div>
      </div>
      {/* { Div for People count } */}
      <div className="people-icon">
        <img
          src={`${process.env.PUBLIC_URL} /activityPics/svg/person.svg`}
          alt="location icon"
          className="people-icon-image"
        />
        <div className="people-info">
          {props.space.people}
          <span className="space-for-people-count">People</span>
        </div>
      </div>
      {/* { Div for Area } */}
      <div className="area-icon">
        <img
          src={`${process.env.PUBLIC_URL} /activityPics/svg/speed-square.svg`}
          alt="location icon"
          className="area-icon-image"
        />
        <div className="area-info">{props.space.area}</div>
      </div>
      {/* { Div for Price } */}
      <div className="rupees-icon">
        <img
          src={`${process.env.PUBLIC_URL} /activityPics/svg/rupees.svg`}
          alt="location icon"
          className="rupees-icon-image"
        />
        <div className="area-info">{props.space.price}</div>
      </div>
    </div>
  </div>
);

export default SpaceSummary;
