const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PostsRouter = require('./routes/posts');
const CommentsRouter = require('./routes/comments')

const PORT = process.env.PORT || 3333;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/posts', PostsRouter);
app.use(morgan('tiny'));
app.set('view engine', 'ejs');
app.use(express.static('static'));



app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page'
  })
});
app.get('*', (req, res) => {
  res.status(404).render('404');
})
app.listen(PORT, () => {
  console.log(`Server is locked and loaded on port ${PORT}`);
})
