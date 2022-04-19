/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-return */
/* eslint-disable prefer-template */
/* eslint-disable camelcase */
const express = require('express');
const Razorpay = require('razorpay');

const dotenv = require('dotenv');
const auth = require('../middlewares/auth');
const Order = require('../models/bookSpace');

dotenv.config();

const currency = 'INR';
const router = express.Router();
const rzpKey = process.env.RZP_KEY_ID;
const secret = process.env.RZP_KEY_SECRET;

const rzpInstance = new Razorpay({
  key_id: rzpKey,
  key_secret: secret,
});

// create new order
router.post('/', (req, res) => {
  const { activityId, email, userName, price, dateStr, startTimeStr, endTimeStr } = req.body;

  // console.log('changing endTimeStr str date to date ', new Date(endTimeStr).getHours());

  const day = new Date(dateStr).toDateString();
  console.log('day ', day);
  const startTime = new Date(startTimeStr).getHours();
  const endTime = new Date(endTimeStr).getHours();
  const totalHrs = endTime - startTime;
  const amount = price * totalHrs * 100;
  const order = new Order({
    activityId,
    email,
    userName,
    day,
    startTime,
    endTime,
    totalHrs,
    amount,
    status: 'Active',
  });
  order.save().then(
    () => {
      console.log('into then');
      const orderId = order.id;
      const options = {
        amount,
        currency,
        receipt: orderId,
      };
      // console.log('before rzpInstance.orders');
      rzpInstance.orders.create(options, (err, rzpOrder) => {
        if (err) {
          res.status(500).send({ error: 'Error in creating razorpay order' });
          return;
        }
        console.log('amount in backend', amount);
        res.status(201).send({
          amount,
          currency,
          orderId,
          rzpOrderId: rzpOrder.id,
        });
      });
    },
    () => {
      res.status(500).send({ error: 'Error in creating order' });
    },
  );
  // console.log('after then');
});

// put razorpay order
router.put('/:id', auth.authenticate, (req, res) => {
  const orderId = req.params.id;
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  if (!razorpay_payment_id || !razorpay_signature) {
    res.status(400).send({ error: 'Missing razorpay payment id or signature' });
    return;
  }
  const generated_signature = crypto
    .createHmac('sha256', secret)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (generated_signature === razorpay_signature) {
    const id = orderId;
    Order.findByIdAndUpdate(id, { $set: { status: 'Completed' } })
      .then(() => {
        res.status(200).send('done');
      })
      .catch(() => {
        res.status(500).send({ error: 'internal server error' });
      });
  } else {
    res.status(400).send({ error: 'Signature validation failed' });
    return;
  }
});

// get orders
router.get('/', auth.authenticate, (req, res) => {
  Order.find({ userId: req.session.userId, status: 'Completed' })
    .then((orders) => {
      res.status(200).send({ orders });
    })
    .catch(() => {
      res.status(500).send({ error: 'internal server error' });
    });
});

// get one order
router.get('/:orderId', auth.authenticate, (req, res) => {
  const id = req.params.orderId;
  Order.findById(id)
    .then((order) => {
      res.status(200).send({ orderData: order });
    })
    .catch(() => {
      res.status(500).send({ error: 'internal server error' });
    });
});
module.exports = router;
