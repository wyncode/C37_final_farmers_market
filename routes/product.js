const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

//get a product

router.get('/products', (req, res) => {
  Product.find({})
  .then((products) =>{
    res.send(products)
  } ) .catch((e) => {
    res.send(e)
  })
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

//get a product //
// get a specific product //
//  Update a product //
// 

// Get all products //

router.get('/products', (req,res) => {
  Product.find({})
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
  try {
    const product = await Product.findOne({ _id });
    res.send(product);
    if (!product) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status(500).send();
  }
});

// Update a Product //

router.patch('/products/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'foodType', 'price', 'farmerStore', 'description', 'category', 'inventory'];
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
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
