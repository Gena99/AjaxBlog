var express = require('express');

var app = express();

app.get('/', function(req, res){
	console.log('Accueil', req.params);
	res.send('page Accueil');
});

app.get('/markdown', function(req, res){
	console.log('Markdown');
	res.send('MarkDown');
});

app.get('/apropos', function(req, res){
	console.log('Page à propos');
	res.send('A propos');
});

var port = 3337
app.listen(port);
console.log("Serveur en écoute sur le port " + port);