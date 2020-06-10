const mongoose = require('mongoose');
// const validator = require('validator');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  foodType: {
    type: String,
    enum: ['Fruit', 'Vegetable', 'Dairy', 'Meat', 'Donation'],
    require: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  farmerStore: {
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Store'
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Non-GMO', 'Organic'],
    required: true
  },
  qty: {
    type: Number,
    required: true
  }
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
