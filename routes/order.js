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
})

// get all orders

router.get('/orders', async (req, res) => {
    Order.find({})
    .then((orders) => {
        res.send(orders)
    })
    .catch((e) => {
        res.send(e);
    })
})

// add/place an order

router.post('/orders', auth, async (req, res) => {
    const order = new Order({ ...req.body, owner: req.user._id});
    try {
        await order.save();
        res.status(201).send(order);
    } catch (e) {
        res.status(400).send(e);
    }
})

// get orders by user

module.exports = router

