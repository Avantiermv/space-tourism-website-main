exports.exibirDestinos = (req, res) => {
    res.render('./destinations/destination-europa', {
        title: "Space Tourism Website - Europa",
        bodyClass: 'body-style',
        backgroundClass: 'bg-home'
    });
}