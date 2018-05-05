const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');







app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(PORT, () => {
  console.log(`Server is locked and loaded on port ${PORT}`);
})
