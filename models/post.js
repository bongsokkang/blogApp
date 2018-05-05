const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const CommentsSchema = new Schema({
  content: {
    type: String,
    default: '',
    minlength: 3
  }
});



const PostsSchema = new Schema({
  content:{
    type: String,
    required: true,
    minlength: 4
  },
  comments: [CommentsSchema]
});




const Post = mongoose.model('Posts', PostsSchema)
module.exports = Post;
