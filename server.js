const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');

app.engine('ejs', function (filePath, data, cb) {
  const basePath = path.resolve(__dirname, 'views');
  ejs.renderFile(filePath, data, {
    root: basePath,
    views: [basePath]
  }, cb);
});

app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static('./public'));
app.use(expressLayout);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', routes);

app.listen(3000, () => {
    console.log("App rodando na porta: 3000");
    console.log("http://localhost:3000");
});
