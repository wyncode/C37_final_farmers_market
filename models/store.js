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
  }
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
