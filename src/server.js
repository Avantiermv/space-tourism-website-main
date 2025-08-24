const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, '../views'));
app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(3000, () => {
    console.log("App rodando na porta: 3000");
    console.log("http://localhost:3000");
});
