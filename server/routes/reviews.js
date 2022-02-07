/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const express = require('express');
const Activity = require('../models/activity');
const Review = require('../models/reviews');

const router = express.Router();

// add or update a review
router.post('/', (req, res, next) => {
  if (!req.session.userId) {
    res.status(401).send({ error: 'User not authenticated' });
    return;
  }

  if (!req.body) {
    res.status(400).send({ error: 'Incomplete Request' });
    return;
  }

  const { userId } = req.session;
  // const { userName } = req.session.userName;
  // eslint-disable-next-line no-console
  // console.log('userId', userId);

  let { newRating, newReview, activityId, userName } = req.body;

  if (newReview === undefined) {
    newReview = '';
  }

  if (!newRating || !activityId || !userId || !userName) {
    res.status(400).send({ error: 'Information incomplete' });
    return;
  }

  Promise.all([
    Review.findOneAndUpdate(
      { activityId, userId },
      { rating: newRating, review: newReview, userName },
      { upsert: true },
    ),
    Activity.findOne({ activityId }),
  ])
    // eslint-disable-next-line consistent-return
    .then((results) => {
      // eslint-disable-next-line no-console
      const oldReview = results[0];
      const activity = results[1];
      if (oldReview === null) {
        const newAvgRating = (activity.avgRating * activity.ratingCount + newRating) / (activity.ratingCount + 1);
        const newRatingCount = activity.ratingCount + 1;
        let newReviewCount = activity.reviewCount;
        if (newReview !== '') {
          newReviewCount = activity.reviewCount + 1;
        }
        return Activity.updateOne(
          { activityId },
          { avgRating: newAvgRating, ratingCount: newRatingCount, reviewCount: newReviewCount },
        );
      }
      if (oldReview.rating !== newRating || oldReview.review !== newReview) {
        let newAvgRating = oldReview.avgRating;
        if (oldReview.rating !== newRating) {
          newAvgRating =
            (activity.avgRating * activity.ratingCount - oldReview.rating + newRating) / activity.ratingCount;
        }
        let { reviewCount } = activity;
        if (oldReview.review !== newReview) {
          if (oldReview.review === '') {
            reviewCount = activity.reviewCount + 1;
          }
          if (newReview === '') {
            reviewCount = activity.reviewCount - 1;
          }
        }
        return Activity.updateOne({ activityId }, { avgRating: newAvgRating, reviewCount });
      }
    })
    .then((result) => {
      res.status(200).send({ message: 'Review Added' });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      res.status(501).send({ error: 'Internal server error!' });
    });
});

// get reviews for a activity
router.get('/:activityId', (req, res, next) => {
  Review.find({ activityId: req.params.activityId })
    .then((reviewList) => {
      res.status(200).send({ reviewList });
    })
    .catch((error) => {
      res.status(501).send({ error: 'Internal server error!' });
    });
});

module.exports = router;
