const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const Store = require('../models/store');

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

// update a store

router.patch('/store');

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
