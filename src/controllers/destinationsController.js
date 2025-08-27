exports.showDestinations = (req, res) => {
    res.render('./destinations/destination-moon', {
        title: "Space Tourism Website - Moon",
        bodyClass: 'body-style',
        backgroundClass: 'bg-destinations'
    });
}