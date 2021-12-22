const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

/*  dotenv to ""hide sensitive data like api keys and credentials"*/
dotenv.config();

/**for mongo connection */
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected to mongo 🔌'))
  .catch((err) => console.log(err));

app.use('/', (req, res) => {
  console.log('hey this is main url');
});

app.listen('8000', () => {
  console.log('Backend is runing...😎');
});
