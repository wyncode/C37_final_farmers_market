if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('./mongoose');

const Product = require('../models/product'),
  Store = require('../models/store'),
  User = require('../models/user'),
  faker = require('faker');

const mongoose = require('mongoose');
const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await Store.countDocuments({}, function (err, count) {
    console.log('Number of stores:', count);
  });

  const userIdArray = [];
  for (let i = 0; i < 1000; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      apt: (Math.floor(Math.random() * 50) + 1).toString(),
      city: faker.address.city(),
      state: faker.address.state(),
      phoneNumber: faker.phone.phoneNumber(),
      zipcode: faker.address.zipCode(),
      image: faker.image.imageUrl(),
      cardName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      cardNumber: '4242424242424242',
      expirationDate: '2020',
      farmer: Boolean(Math.round(Math.random()))
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await Store.countDocuments({}, function (err, count) {
    console.log('Number of stores:', count);
  });
};

dbReset();
