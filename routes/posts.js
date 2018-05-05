const express = require('express');
const PostsRouter = express.Router();
const Post = require('../models/post');
const mongoose = require('../db/mongoose');
const _ = require('lodash');

PostsRouter.get('/', (req, res) => {
  Post.find().then((posts) => {
    // res.json(posts) When testing route in Postman
    res.render('posts', {
      posts: posts,
      title: 'See All the Posts'
    });
  }).catch((error) => {
    res.status(400).render('errors/400')
    // res.send(error); When testing in Postman
  });
});

PostsRouter.post('/', (req, res) => {
  let newPost = new Post({
    content: req.body.content
  });
  newPost.save().then((post) => {
    // res.json(post) // For testing with Postman
    res.redirect('/posts')
  }).catch((error) => {
    res.status(400).render('errors/400');
    // res.send(error); // For testing with Postman
  });
});






module.exports = PostsRouter;
