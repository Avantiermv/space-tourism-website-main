const data = require('../data/data.json');

exports.showDestinationMoon = (req, res) => {
    res.render('./destinations/destination-moon', {
        title: "Space Tourism Website - Moon",
        bodyClass: 'body-style',
        backgroundClass: 'bg-destinations',
        data
    });
}

exports.showDestinationMars = (req, res) => {
    res.render('./destinations/destination-mars', {
        title: "Space Tourism Website - Mars",
        bodyClass: 'body-style',
        backgroundClass: 'bg-destinations',
        data
    });
}

exports.showDestinationEuropa = (req, res) => {
    res.render('./destinations/destination-europa', {
        title: "Space Tourism Website - Europa",
        bodyClass: 'body-style',
        backgroundClass: 'bg-destinations',
        data
    });
}

exports.showDestinationTitan = (req, res) => {
    res.render('./destinations/destination-titan', {
        title: "Space Tourism Website - Titan",
        bodyClass: 'body-style',
        backgroundClass: 'bg-destinations',
        data
    });
}