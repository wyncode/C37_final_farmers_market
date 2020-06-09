require('./db/mongoose');
const express = require('express'),
  cors = require('cors'),
  path = require('path');
//library from node.js to grab file paths

const app = express();

const User = require('./models/user');
const Store = require('./models/store');
const UserRoutes = require('./routes/user');
const StoreRoutes = require('./routes/store');

//Middleware

// app.use((req, res) => {
//   console.log(req.method, req.path);
//   res
//     .status(503)
//     .json({ error: 'Site is down due to Maintenance, Check Back Soon Yall' });
// });

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(StoreRoutes);

//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
module.exports = app;
