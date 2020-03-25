let express = require('express');
var bodyParser = require('body-parser');
const mongoClient = require('mongodb');
require('dotenv').config();
let app = express();
app.use(bodyParser.json());

const uri = process.env.MONGODBURI;
const dbName = 'Backstab';

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Ves a /api/collection!');
});

mongoClient.connect(uri, (err, client) => {
  if(!err) {
    const db = client.db(dbName);
    db.listCollections().toArray((err, items) => {
      items.forEach((item) => {
        var colName = item.name;
        app.get('/api/' + colName, (req, res) => {
          res.set('content-type', 'application/json');
          if(Object.keys(req.query) === 0){
            db.collection(colName).find().toArray((err, docs) => {
              var docsString = JSON.stringify(docs);
              res.send(`{"docs":{${docsString}}}`);
            });
          }else{
            db.collection(colName).find(req.query).toArray((err, docs) => {
              var docsString = JSON.stringify(docs);
              res.send(`{"docs":{${docsString}}}`);
            });
          }
          
        });
      }, () => {
        client.close();
      });
    });
  }
});

app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));