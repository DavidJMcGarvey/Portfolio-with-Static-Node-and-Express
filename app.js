// ------------------------------------------
//  Express App Setup
// ------------------------------------------

// Inital express setup
const express = require('express');
var createError = require('http-errors');

const app = express();

// Static and Pug setup
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

// Error handlers
app.use((req, res, next) => {
  return next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  err.message = 'Something went wrong dawg!';
  res.status(err.status || 500);
  res.render('error');
});

// Setup local host
app.listen(3000, () => {
  console.log(`The app is running on localhost:3000, dawg!`);
});