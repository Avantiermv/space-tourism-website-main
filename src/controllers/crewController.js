const data = require('../data/data.json');

exports.showCrew = (req, res) => {
    res.render('crew/crew-commander', {
        title: "Space Tourism Website - Commander",
        bodyClass: 'body-style',
        backgroundClass: 'bg-crew',
        data
    });
}

exports.showCrewSpecialist = (req, res) => {
    res.render('crew/crew-specialist', {
        title: "Space tourism Website - Specialist",
        bodyClass: 'body-style',
        backgroundClass: 'bg-crew',
        data
    });
}

exports.showCrewPilot = (req, res) => {
    res.render('crew/crew-pilot', {
        title: "Space tourism Website - Pilot",
        bodyClass: 'body-style',
        backgroundClass: 'bg-crew',
        data
    });
}

exports.showCrewEngineer = (req, res) => {
    res.render('crew/crew-engineer', {
        title: "Space tourism Website - Engineer",
        bodyClass: 'body-style',
        backgroundClass: 'bg-crew',
        data
    });
}