const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const PostsRouter = require('./routes/posts');

app.use('/posts', PostsRouter);

app.use(morgan('tiny'));
app.set('view engine', 'ejs')




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
