const mongoose = require('mongoose');
const Product = require('./product');

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  storeImage: {
    type: String,
    required: false
  },
  orders: {
    type: Array
  },
  items: {
    type: Array
  },
  description: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Create relation between Store and products
storeSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'farmerStore'
});

//Delete store's products when a store is removed
storeSchema.pre('deleteOne', async function (next) {
  const store = this;
  await Product.deleteMany({
    farmerStore: store._conditions._id
  });
  next();
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
