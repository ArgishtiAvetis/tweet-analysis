module.exports = (app) => {
	
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
	
}