const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

//get a product

router.get('/products', async (req, res) => {
  res.send(req.body);
});

//create a product
router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send({ product });
  } catch (e) {
    res.status(400).send(e);
  }
});

// get all the product

router.get;

module.exports = router;
