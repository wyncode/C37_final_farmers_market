const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const Store = require('../models/store');
const auth = require('../middleware/auth');

// get a specific store
router.get('/stores/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const store = await Store.findOne({ _id });
    res.send(store);
    if (!store) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status(500).send();
  }
});

// get all stores

router.get('/stores', async (req, res) => {
  Store.find({})
    .then((stores) => {
      res.send(stores);
    })
    .catch((e) => {
      res.send(e);
    });
});
// update a store

router.patch('/stores/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'storeName',
    'phoneNumber',
    'address',
    'storeImage',
    'products'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user.farmer) {
      res.status(404).send({ message: 'Must be a farmer to update' });
    }
    updates.forEach((update) => {
      store[update] = req.body[update];
    });
    await store.save();

    res.send(store);
  } catch (e) {
    res.status(400).send(e);
  }
});

// add a store

router.post('/stores', async (req, res) => {
  const store = new Store(req.body);
  try {
    await store.save();
    res.status(201).send(store);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
