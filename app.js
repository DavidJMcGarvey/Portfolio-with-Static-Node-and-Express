
// ------------------------------------------
//  Express App Setup
// ------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
  res.render('about');
});

// Setup local host
app.listen(3000, () => {
  console.log(`The app is running on localhost:3000, dawg!`);
});