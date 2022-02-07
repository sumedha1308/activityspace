/* eslint-disable no-unused-vars */
import React from 'react';
import './review.css';

const Review = (props) => (
  <div>
    <textarea
      className="user-review-box"
      name="newReview"
      value={props.value}
      onChange={props.onChange}
      placeholder="Write your review here"
    ></textarea>
  </div>
);

export default Review;
