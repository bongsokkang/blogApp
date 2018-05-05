const express = require('express');
const PostsRouter = express.Router();
const Post = require('../models/post')
const mongoose = require('../db/mongoose')

PostsRouter.get('/', (req, res) => {
  Post.find().then((posts) => {
    res.send(posts)
  }).catch((error) => {
    res.status(400).render('errors/400')
  });
});







module.exports = PostsRouter;
