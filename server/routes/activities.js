/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
const express = require('express');
const Activity = require('../models/activity');
const Review = require('../models/reviews');

const router = express.Router();

// all activities information
router.get('/', (req, res, next) => {
  Activity.find()
    .then(async (activities) => {
      const activityList = [];
      activities.forEach((activity) => {
        activityList.push({ ...activity.toJSON() });
      });
      // let reviewArr = [];
      if (req.session.userId !== undefined) {
        const { userId } = req.session;
        for (const i in activityList) {
          await Review.findOne({ activityId: activityList[i].activityId, userId }, { rating: 1, review: 1 })
            .then((review) => {
              if (review != null) {
                activityList[i].userReview = review;
              }
            })
            .catch(() => {});
        }
      }
      res.status(200).send({ activityList });
    })
    .catch((error) => {
      res.status(501).send({ error: 'Internal Server Error' });
    });
});

// single activity information
router.get('/:activityId', (req, res, next) => {
  if (!req.params.activityId) {
    res.status(400).send({ error: 'Invalid Request' });
    return;
  }

  const { activityId } = req.params;
  Activity.findOne({ activityId })
    .then(async (activity) => {
      if (activity === null) {
        res.status(400).send({ error: 'Invalid activityId' });
        return;
      }
      const activityData = { ...activity.toJSON() };
      if (req.session.userId !== undefined) {
        const { userId } = req.session;
        await Review.findOne({ activityId: activity.activityId, userId }, { rating: 1, review: 1 }).then((review) => {
          if (review !== null) {
            activityData.userReview = review;
          }
        });
      }
      res.status(200).send({ activityData });
    })
    .catch((error) => {
      res.status(501).send({ error: 'Internal Server Error!' });
    });
});

module.exports = router;
