// ------------------------------------------
//  Express App Setup
// ------------------------------------------
const express = require('express');
var createError = require('http-errors');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

// Error handlers
app.use((req, res, next) => {
  // const err = new Error('Something went wrong dawg!');
  // err.status = 404;
  // next(err);
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