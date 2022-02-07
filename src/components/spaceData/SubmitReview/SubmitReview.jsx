/* eslint-disable no-unused-vars */
import React from 'react';
import './submitReview.css';
import Button from '../../Button/Button.jsx';
import Rating from '../Rating/Rating.jsx';

const SubmitReview = (props) => (
  <div>
    <Rating loginStatus={props.loginStatus} rating={props.rating} changeRating={props.changeRating} />
    <div className="submit-review-textArea">
      <textarea
        className="user-review-box"
        name="newReview"
        value={props.value}
        onChange={props.onChange}
        placeholder="Write your review here"
      ></textarea>
    </div>
    <Button onClick={props.onClick} buttonValue={props.buttonValue} />
  </div>
);

export default SubmitReview;
