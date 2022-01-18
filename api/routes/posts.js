const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");



//create a new post
//save it to the database with the user id
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    const entredUser = newPost.username;

    try {
      //find the entred User in the DB
      const user = await User.findOne({username: entredUser});
      //if the user is not found
      if (!user) {
        res.status(401).json({ message: "Sorry you must be a registered User to write Posts :(" });}
      //if the user is found
      else {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
      }
     
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //update post with post id    
  router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete post 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can delete only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });


    //Read / get

    router.get("/:id", async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          res.status(200).json(post);
        } catch (err) {
          res.status(500).json(err);
        }
      });


      //get all posts 

      router.get("/", async (req, res) => {
        const username = req.query.user;
        const catName = req.query.cat;
        try {
          let posts;
          if (username) {
            posts = await Post.find({ username });
          } else if (catName) {
            posts = await Post.find({
              categories: {
                $in: [catName],
              },
            });
          } else {
            posts = await Post.find();
          }
          res.status(200).json(posts);
        } catch (err) {
          res.status(500).json(err);
        }
      });

module.exports = router;