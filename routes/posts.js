const express = require('express');
const PostsRouter = express.Router();
const Post = require('../models/post');
const mongoose = require('../db/mongoose');
const _ = require('lodash');

PostsRouter.get('/', (req, res) => {
  Post.find().then((posts) => {
    // res.json(posts); // For API or when testing route in Postman
    res.render('posts', {
      posts: posts,
      title: 'See All the Posts'
    });
  }).catch((error) => {
    res.status(400).render('errors/400')
    // res.send(error); // For API or when testing in Postman
  });
});

PostsRouter.post('/', (req, res) => {
  let newPost = new Post({
    content: req.body.content
  });
  newPost.save().then((post) => {
    // res.json(post) // For API or when testing with Postman
    res.redirect('/posts')
  }).catch((error) => {
    res.status(400).render('errors/400');
    // res.send(error); // For API or when testing with Postman
  });
});
PostsRouter.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.body.id).then(() => {
    res.redirect('/posts')
    // res.send('Post Was Deleted')
  }).catch(() => {
    res.status(400).render('errors/400')
  });
});






module.exports = PostsRouter;
