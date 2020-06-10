const mongoose = require('mongoose');

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
    type: Object
  },
  products: {
    type: Array
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
