const data = require('../data/data.json');

exports.showCrew = (req, res) => {
    res.render('crew/crew-commander', {
        title: "Space Tourism Website",
        bodyClass: 'body-style',
        backgroundClass: 'bg-crew',
        data
    });
}