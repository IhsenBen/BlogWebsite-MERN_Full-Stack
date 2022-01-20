const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
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

  //storage for picture with multer pkg 
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'img')},
      filename:(req,file,cd)=>{
        //save the original file name with current date and time
   
        const date = new Date();
        //some  redundant way I found to get a readable date.() ( to imporove)
        cd(null, date.getMonth()+'_'+ date.getDate()+'_'+ date.getFullYear()+'-'+date.getHours()+'_'+ date.getMinutes()+'-'+ file.originalname)
      }},
    );

    const upload = multer({storage:storage});

    app.post("/api/upload",upload.single('picture'),(req,res)=>{
      res.status(200).json('uploaded');
    });


  app.use('/api/auth', authRoute);
  app.use('/api/users', userRoute);
  app.use('/api/posts', postRoute);
  app.use('/api/categories', categoryRoute);


app.listen('8000', () => {
  console.log('Backend is runing...😎');
});
