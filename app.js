let express = require('express');
let app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var PORT = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

app.get('/ok-login', function (req, res) {
 res.send('¡ERROR! ¡You must arrive here from a POST request from index form!');
});

app.post('/ok-login', urlencodedParser, function (req, res) {
	res.render('pages/ok-login', {data: req.body});
});

app.get('/', (req, res) => {
  res.send('IT WORKS!!');
  //res.render('pages/index');
});


app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));