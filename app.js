let express = require('express');
var bodyParser = require('body-parser');
const mongoClient = require('mongodb');
require('dotenv').config();
let app = express();
app.use(bodyParser.json());

const uri = process.env.MONGODBURI;
const dbName = 'Backstab';

const client = new mongoClient(uri);

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var collections = [];
var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Ves a /api/collection!');
});
/*
mongoClient.connect(uri, (err, client) => {
  if(!err){
    const db = client.db(dbName);
    db.listCollections().toArray((err, items) => {
      items.forEach(item => {
        collections.push(item.name);
        /*
        app.get('/api/' + item.name, urlencodedParser, (req, res) =>{
          var collection = db.collection(item.name);
          var docsArray = [];
          var docs;
          if(Object.keys(req.query).length === 0){
            docs = collection.find();
          }else{ 
            docs = collection.find(req.query);
          }
          docs.forEach(doc => {
            docsArray.push(doc);
          }, () => {
            res.send(docsArray);
            client.close();
          });
        });*/
     /* });
    });
  }
});

collections.forEach((col, index, cols) => {
  app.get('/api/' + col, (req, res) => {
    mongoClient.connect(uri, (err, client) => {
      let db = client.db('dbName');
      let collection = db.collection(item.name);
      let docsArray = [];
      let docs;
      if(Object.keys(req.query).length === 0){
        docs = collection.find();
      }else{
        docs = collection.find(req.query);
      }
      docs.forEach((doc) => {
        docsArray.push(doc);
      }, () => {
        res.send(docsArray);
        client.close();
      });
    });
  });
});
*/
app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));