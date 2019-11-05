// ------------------------------------------
//  Express App Setup
// ------------------------------------------

// Inital express setup
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

// Static and Pug setup
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

// Error handlers
app.use((req, res, next) => {
  const err = new Error('Error --> Could not find requested page, dawg!');
  err.status = 404;
  console.error(err.message);
  return next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  err.message = 'Something went wrong dawg!';
  res.status(err.status || 500);
  res.render('error');
});

// Setup local host
app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}, dawg!`);
});