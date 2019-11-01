const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');


router.get('/', (req, res, next) => {
  const projectList = [];
  
  for (let i = 0; i < projects.length; i++) {
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    projectList.push(projectObj);
  }
  console.log(projectList);
  const templateData = { projectList };
  res.render('index', templateData);
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/project/:id', (req, res, next) => {
  const { id } = req.params;
  const name = projects[id].project_name;
  const description = projects[id].description;
  const technologies = projects[id].technologies;
  const github = projects[id].github_link;

  const templateData = { id, name, description, technologies, github };
  res.render('project', templateData);
});

module.exports = router;