const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');
 


router.get('/', (req, res, next) => {
  const name = projects[0].project_name;
  const templateData = { name };
  res.render('about', templateData);
});


module.exports = router;