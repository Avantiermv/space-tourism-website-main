const express = require('express');
const router = express.Router();

const destinationsController = require('../controllers/destinationsController');
const crewController = require('../controllers/crewController');
const tecnologyController = require('../controllers/tecnologyControllers');

router.get('/', (req, res) => {
    res.render('home', {
        title: "Space Tourism Website",
        bodyClass: 'body-style',
        backgroundClass: 'bg-home'
    });
}); //Jogar isso que tá dentro do get, dentro do homeController

router.get('/destination', destinationsController.exibirDestinos);
router.get('/crew', crewController.showCrew);
router.get('/technology', tecnologyController.showTecnology);


module.exports = router;