const express = require('express');
const router = express.Router();

const destinationsController = require('../controllers/destinationsController');
const crewController = require('../controllers/crewController');
const tecnologyController = require('../controllers/tecnologyControllers');

router.get('/', (req, res) => {
    res.render('home', {
        title: "Home",
        backgroundClass: 'bg-home'
    });
});

router.get('/destination', destinationsController.exibirDestinos);
router.get('/crew', crewController.showCrew);
router.get('/technology', tecnologyController.showTecnology);


module.exports = router;