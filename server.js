if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('./db/mongoose');

const app = require('./app'),
  port = process.env.PORT || 8087;

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
