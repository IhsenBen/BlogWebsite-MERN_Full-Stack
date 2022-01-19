const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

/*  dotenv to ""hide sensitive data like api keys and credentials"*/
dotenv.config();

app.use(express.json());

/**for mongo connection */
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected to mongo 🔌'))
  .catch((err) => console.log(err));

  app.use('/api/auth', authRoute);
  app.use('/api/users', userRoute);
  app.use('/api/posts', postRoute);
  app.use('/api/categories', categoryRoute);


app.listen('8000', () => {
  console.log('Backend is runing...😎');
});
