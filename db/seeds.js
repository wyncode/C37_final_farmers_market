if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('./mongoose');
const Products = require('../models/product'),
  Store = require('../models/store');

const mongoose = require('mongoose');
const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
};
dbReset();
