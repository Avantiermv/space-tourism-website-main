const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const destinationsController = require('../controllers/destinationsController');
const crewController = require('../controllers/crewController');
const technologyController = require('../controllers/technologyControllers');

router.get('/', homeController.showHome); 

router.get('/destination', destinationsController.showDestinationMoon);
router.get('/destination/destination-mars', destinationsController.showDestinationMars);
router.get('/destination/destination-europa', destinationsController.showDestinationEuropa);
router.get('/destination/destination-titan', destinationsController.showDestinationTitan);

router.get('/crew', crewController.showCrew);
router.get('/crew/crew-specialist', crewController.showCrewSpecialist);
router.get('/crew/crew-pilot', crewController.showCrewPilot);
router.get('/crew/crew-engineer', crewController.showCrewEngineer);

router.get('/technology', technologyController.showTechnology);

module.exports = router;