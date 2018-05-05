const express = require('express');
const PostsRouter = express.Router();
const Post = require('../models/post');
const mongoose = require('../db/mongoose');
const _ = require('lodash');;

PostsRouter.get('/', (req, res) => {
  Post.find().then((posts) => {
    // res.json(posts) When testing route in Postman
    res.render('posts', {
      posts: posts
    });
  }).catch((error) => {
    res.status(400).render('errors/400')
  });
});

PostsRouter.post('/', (req, res) => {
  let body = _.pick(req.body, ['content'])
  let newPost = new Post(body);
  newPost.save().then((post) => {
    // res.json(post) For testing with Postmamn
    res.redirect('/posts')
  }).catch((error) => {
    res.status(400).render('errors/400');
  });
});






module.exports = PostsRouter;
