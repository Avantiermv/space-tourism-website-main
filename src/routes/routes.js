const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const destinationsController = require('../controllers/destinationsController');
const crewController = require('../controllers/crewController');
const tecnologyController = require('../controllers/tecnologyControllers');

router.get('/', homeController.showHome); 

router.get('/destination', destinationsController.showDestinations);
router.get('/crew', crewController.showCrew);
router.get('/technology', tecnologyController.showTecnology);

module.exports = router;