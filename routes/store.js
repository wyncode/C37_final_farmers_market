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

router.patch('/stores/:id', auth, async (req, res) => {
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
    const store = await Store.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!store) {
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

router.post('/stores', auth, async (req, res) => {
  const store = new Store({ ...req.body, owner: req.user._id });
  try {
    await store.save();
    res.status(201).send(store);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete a store
router.delete('/stores/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const store = await Store.findOne({ _id });
    await Store.deleteOne(store);
    if (!store) {
      res.status(404).send();
    }
    res.send(store);
  } catch (e) {
    res.status(500).send();
  }
});

//this gets the current users store

router.get('/currentStore', auth, async (req, res) => {
  try {
    await req.user.populate('stores').execPopulate();
    res.send(req.user.stores);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

module.exports = router;
