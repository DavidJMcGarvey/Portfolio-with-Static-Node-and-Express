
// ------------------------------------------
//  Express App Setup
// ------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

// Setup local host
app.listen(3000, () => {
  console.log(`The app is running on localhost:3000, dawg!`);
});