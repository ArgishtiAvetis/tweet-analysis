// import dependencies
const express = require('express');
const join = require('path').join;
const bodyParser = require('body-parser');

// initialize our app
const app = express();

// important constants
const port = process.env.PORT || 8080;

// set, use
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/analyzer', (req, res) => {
	if (req.query.username) {

		var username = req.query.username;

		res.render('results', {
			username: username
		});

	} else {
		res.redirect('/');
	}
});

// listen on port
app.listen(port, () => console.log(`App is running on port ${port}`));