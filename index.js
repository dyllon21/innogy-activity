const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const flash = require('express-flash');
// const session = require('express-session');
const PlumberRoutes = require('./plumbers.js');
const Models = require('./models');
// const ObjectId = require("mongodb").ObjectId;
const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/plumberApi');
const plumberRoutes = PlumberRoutes(models);
const app = express();

app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
        next();
})

app.engine('.handlebars', exphbs({
        defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
        extended: false
}))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/api/plumber',  plumberRoutes.plumberName);
app.post('/api/plumber', plumberRoutes.addNewPlumber);
app.post('/api/plumber/slot/:slot/day/:day', plumberRoutes.bookPlumber)

const port = process.env.PORT || 3500;
app.listen(port, function() {
        console.log('web app started on port: ' + port);
})
