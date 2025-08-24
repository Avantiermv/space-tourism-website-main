const express = require('express');
const router = express.Router();

const destinationsController = require('../controllers/destinationsController');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/destination', destinationsController.exibirDestinos);


module.exports = router;