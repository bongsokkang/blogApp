const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongdb://localhost:27017/Blogger')
module.exports = mongoose;
