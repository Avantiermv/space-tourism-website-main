exports.showHome = (req, res) => {
    res.render('home', {
        title: "Space Tourism Website",
        bodyClass: 'body-style',
        backgroundClass: 'bg-home'
    });
}