const data = require('../data/data.json');

exports.showTechnology = (req, res) => {
    res.render('technology/technology-capsule', {
        title: "Space Tourismo Website - Technology Capsule",
        bodyClass: '',
        backgroundClass: '',
        data
    });
}