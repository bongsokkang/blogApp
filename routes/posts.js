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
PostsRouter.get('/:id', (req, res) => {
  Post.findById(req.params.id).then((post) => {
    res.render('post', {
      post:post,
      title: 'View Post'
    }).catch(() => {
      res.status(400).render('errors/400');
    });
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
  Post.findByIdAndRemove(req.params.id).then((deletedPost) => {
    // res.send(deletedPost) // For Testing in Postman
    res.redirect('/posts')
  }).catch((error) => {
    res.status(400).render('errors/400')
    // res.send(error) // For testing in Postman
  });
});
PostsRouter.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id).then((updatedPost) => {
    res.render('post');
    res.json(updatedPost);
  }).catch((error) => {
    res.status(400).render('errors/400')
  });
});





module.exports = PostsRouter;
