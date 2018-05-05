const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const PostsRouter = require('./routes/posts');
const bodyParser = require('body-parser');


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
