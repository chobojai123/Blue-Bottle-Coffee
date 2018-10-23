const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('../config/keys');
const coffeeRoutes = require('../routes/coffeeRoutes.js');
require('../database/Coffee');

mongoose.connect(
  keys.mongoUri,
  { useNewUrlParser: true },
  () => console.log('Db has connected!')
);

const app = express();

app.use(bodyParser.json());

coffeeRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  const path = require('path');
  // Like our main.js file, or main.css file!
  app.use(express.static('client/build'));
  // express will serve up index.html if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Currently listening on port ${port}`));
