const express = require('express');
const CommentsRouter = express.Router();
const Post = require('../models/post');
const mongoose = require('../db/mongoose');

CommentsRouter.post('/:id', (req, res) => {
  let comment = {content: req.body.comments};
  let id = req.params.id;
  Post.findById(id).then((post) => {
  	post.comments.push(comment);
  	post.save();
  	res.redirect('/posts');
  }, ((error) => res.send(error)));
})




module.exports = CommentsRouter;
