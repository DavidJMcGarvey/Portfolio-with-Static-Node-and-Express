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
  const PHPProjectList = [];
  const FeaturedList = [];

  for (let i = 0; i < 10; i++) {
    // Pull JavaScript project data for template
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    JavaScriptProjectList.push(projectObj);
  }

  for (let i = 10; i < 16; i++) {
    // Pull Python project data for template
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    PythonProjectList.push(projectObj);
  }

  for (let i = 16; i < 17; i++) {
    // Pull PHP project data for template
    const projectObj = {};
    projectObj.id = projects[i].id;
    projectObj.title = projects[i].project_name;
    JavaScriptProjectList.push(projectObj);
  }

  // Select projects for Featured List
  const featuredProject_1 = {};
  const featuredProject_2 = {};
  const featuredProject_3 = {};

  featuredProject_1.id = projects[0].id;
  featuredProject_1.title = projects[0].project_name;

  featuredProject_2.id = projects[4].id;
  featuredProject_2.title = projects[4].project_name;

  featuredProject_3.id = projects[6].id;
  featuredProject_3.title = projects[6].project_name;

  FeaturedList.push(featuredProject_1, featuredProject_2, featuredProject_3);

  // Pass project data to template
  const templateData = { JavaScriptProjectList, PythonProjectList, PHPProjectList, FeaturedList };
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
  const image_urls = projects[id].image_urls;

  const templateData = { id, name, description, technologies, github, live_link, image_urls };
  res.render('project', templateData);
});

// Export for use in app.js
module.exports = router;
