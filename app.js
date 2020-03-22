let express = require('express');
let app = express();
var bodyParser = require('body-parser');

const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://admin:P@ssw0rd@m06-cabezueloerik-e7cnn.mongodb.net/test?retryWrites=true&w=majority";
var databases = "";
const client = new MongoClient(uri);
try{

	await client.connect();
	await listDatabases(client);

}catch(e){
	console.error(e);
}finally{
	await client.close();
}


app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('El servidor funciona perfectament!! Les database que hi ha son: ' + databases);
});

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => databases + db.name + ", ");//console.log(` - ${db.name}`));
};

app.listen(PORT, () => console.log('Backstab està corrent al port ' + PORT + '!'));