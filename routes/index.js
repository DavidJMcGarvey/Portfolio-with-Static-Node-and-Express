// ------------------------------------------
//  Router Setup
// ------------------------------------------

const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// Render 'home' page
router.get('/', (req, res, next) => {
  const JavaScriptProjectList = [];
  const PythonProjectList = [];
  
  for (let i = 0; i < 5; i++) {
    // Pull JavaScript project data for template
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    JavaScriptProjectList.push(projectObj);
  }

  for (let i = 5; i < 11; i++) {
    // Pull Python project data for template
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    PythonProjectList.push(projectObj);
  }

  // Pass project data to template
  const templateData = { JavaScriptProjectList, PythonProjectList };
  res.render('index', templateData);
});

// Render 'about' page
router.get('/about', (req, res, next) => {
  res.render('about');
});

// Render 'project' pages based on unique id
router.get('/project/:id', (req, res, next) => {
  const { id } = req.params;
  const name = projects[id].project_name;
  const description = projects[id].description;
  const technologies = projects[id].technologies;
  const github = projects[id].github_link;
  const live_link = projects[id].live_link;

  const templateData = { id, name, description, technologies, github, live_link };
  res.render('project', templateData);
});

// Export for use in app.js
module.exports = router;