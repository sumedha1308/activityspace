const express = require('express');

const router = express.Router();

const users = require('./routes/users');
const sessions = require('./routes/sessions');
const activities = require('./routes/activities');
const reviews = require('./routes/reviews');
// const bookSpaceOrder = require('./routes/bookSpaceOrder');
const order = require('./routes/order');

// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/users', users);

router.use('/sessions', sessions);

router.use('/activities', activities);

router.use('/reviews', reviews);

router.use('/order', order);

module.exports = router;
