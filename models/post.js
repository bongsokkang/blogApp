const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const CommentsSchema = new Schema({
  // need to add some validators
})



const PostsSchema = new Schema({
// Will need to add some validators for this
})




const Post = mongoose.model('Posts', PostsSchema)
