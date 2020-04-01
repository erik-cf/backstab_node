let express = require('express');
let getRouters = require('./get/get');
let postRouter = require('./post/post');
let putRouter = require('./put/put');
var bodyParser = require('body-parser');

//const mongoClient = require('mongodb');
require('dotenv').config();
let app = express();
require('./MongoManager/connection');

const uri = process.env.MONGODBURI;
const dbName = 'Backstab';

app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(getRouters);
app.use(postRouter);
app.use(putRouter);
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('To use the API you should use the ');
});

app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));