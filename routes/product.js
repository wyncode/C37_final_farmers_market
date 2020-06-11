const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

//get a product

router.get('/products', async (req, res) => {
  res.send(req.body);
});

// Create a product //

router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Get current product //

router.get('/products/me', auth, async (req, res) => {
  try {
    res.send(req.product);
  } catch (e) {
    res.status(500).send();
  }
});

// Get all products //

router.get('/products', (req,res) => {
  User.find({})
  .then(products => {
    res.send(products);
  })
  .catch(e => {
    res.send(e);
  })
})

// Get a specific product //

router.get('/products/:id', async (req, res) => {
  const _id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    try {
      const product = await product.findById(_id);
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(400).send('Not a valid product');
  }
});

// Update a Product //

router.patch('/products/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'foodType', 'price', 'farmerWho'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete a Product//
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
