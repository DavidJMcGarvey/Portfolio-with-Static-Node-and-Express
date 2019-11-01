const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');

// router.get('/', (req, res, next) => {
//   const name = projects[0].project_name;
//   const templateData = { name };
//   res.render('about', templateData);
// });

// router.get('/about', (req, res, next) => {
//   const name = projects[0].project_name;
//   const templateData = { name };
//   res.render('about', templateData);
// });

router.get('/', (req, res, next) => {
  res.render('index');
  // res.redirect('/about/');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/project/:id', (req, res, next) => {
  const { id } = req.params;
  const name = projects[id].project_name;

  const templateData = { id, name };
  res.render('project', templateData);
});

module.exports = router;