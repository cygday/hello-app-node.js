const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/hello', (req, res) => {
	const name = req.body.name;
	res.send(`<h1> hello, ${name}! </h1>`);
});
	app.listen(port, () => {
		console.log('app running at http://localhost:${port}');
	});
