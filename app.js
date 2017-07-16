// import dependencies
const express = require('express');
const join = require('path').join;
const bodyParser = require('body-parser');

// initialize our app
const app = express();

// important constants
const PORT = process.env.PORT || 8080;

// set, use
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// pass the "app" constant and import our routes 
require('./app/routes.js')(app);

// listen on PORT
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));