let express = require('express');
var bodyParser = require('body-parser');
const mongoClient = require('mongodb');

let app = express();
app.use(bodyParser.json());
const uri = "mongodb+srv://erikcf:erikcf@m06-cabezueloerik-e7cnn.mongodb.net/test?retryWrites=true&w=majority";
const dbName = 'Backstab';

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var PORT = process.env.PORT || 3000;

mongoClient.connect(uri, (err, client) => {
  if(!err){
    const db = client.db(dbName);
    db.listCollections().toArray((err, items) => {
      items.forEach(item => {
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
        });
      });
    });
  }
});
/*
mongoClient.connect(uri, (err, client) => {
  if(!err){
    const db = client.db(dbName);

    db.listCollections().toArray(function(err, items) {

      items.forEach(item => {

        app.get('/api/' + item.name, urlencodedParser, (req, res) => {
          var urlParts = JSON.parse(JSON.stringify(url.parse(req.url, true).query));
          console.log(urlParts);
          var resultArray = [];
          mongoClient.connect(uri, (err, client) => {
            const db = client.db(dbName);
            console.log('hola');
            if(urlParts.JSON = '{aaaa}'){
              console.log('eyyy');
              res.send(db.collection(item.name).findOne({name : "Golem"}));
              client.close();
            }else{
              console.log('hola3');
              var cursor;
              cursor = db.collection(item.name).find();
            
            
              cursor.forEach(doc => {
                resultArray.push(doc);
              }, () => {
                client.close();
                res.send(resultArray);
              });
            }
            
          });
          
        });
        /*var docs = db.collection(item.name).find();
        docs.forEach(doc => {
          app.get('/api/' + item.name + '/' + doc.name, urlencodedParser, (req, res) => {
            res.send(doc);
          });
        });*/
  /*      
      });
      client.close();
  });
  }
});
*/
app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));