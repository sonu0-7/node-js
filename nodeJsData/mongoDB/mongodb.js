const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const databaseName = 'firstDb';
const client = new MongoClient(url);

async function dbConnect(){
    let rusult = await client.connect();
    db = result.db(databaseName);
    return db.collection('info');
}

module.exports = dbConnect;