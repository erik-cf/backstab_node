const mongoClient = require('mongodb');

const uri = "mongodb+srv://erikcf:erikcf@m06-cabezueloerik-e7cnn.mongodb.net/test?retryWrites=true&w=majority";

const connectToMongo = async() => {
	await mongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
}

module.exports = connectToMongo;