const express = require('express');
const router = new express.Router();
const Order = require('../models/order');
const auth = require('../middleware/auth');

// get a specific order

router.get('/orders/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const order = await Order.findOne({ _id });
    res.send(order);
    if (!order) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status(500).send();
  }
});

// get all orders

router.get('/orders', async (req, res) => {
  Order.find({})
    .then((orders) => {
      res.send(orders);
    })
    .catch((e) => {
      res.send(e);
    });
});

// add/place an order

router.post('/orders', auth, async (req, res) => {
  console.log('HELLO');
  const order = new Order({ ...req.body, user: req.user._id });
  try {
    console.log('WTF');
    console.log(order);
    await order.save();

    res.status(201).send(order);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get orders by user
router.get('/userOrders', auth, async (req, res) => {
  console.log(req.user);
  try {
    console.log('insdie try');
    await req.user.populate('orders').execPopulate();
    res.send(req.user.orders);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

// delete an order
router.delete('/orders/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const order = await Order.findOne({ _id });
    await Order.deleteOne(order);
    if (!order) {
      res.status(404).send();
    }
    res.send(order);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
