/* eslint-disable no-unused-vars */
import React from 'react';
import './editReviewRating.css';
import Button from '../../Button/Button.jsx';
import Rating from '../Rating/Rating.jsx';

const EditReviewRating = (props) => (
  <div>
    <Rating loginStatus={props.loginStatus} rating={props.space.userReview.rating} changeRating={() => {}} />
    <div className="edit-review-box">{props.space.userReview.review}</div>
    <Button onClick={props.onClick} buttonValue={props.buttonValue} />
  </div>
);

export default EditReviewRating;
