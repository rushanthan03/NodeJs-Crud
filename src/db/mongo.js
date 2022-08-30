// const { MongoClient } = require('mongodb');
// const db =require('../config/db')

// const url = db.mongo.url;
// const schoolDb= db.mongo.db;

const {MongoClient, Db} = require('mongodb');
const dbConfig =require('../config/db');
console.log(dbConfig);
const url = dbConfig.mongo.url;
const dbName = dbConfig.mongo.db;
let db;

const client = new MongoClient(url);
const connect = async()=> {
    try{
        const con= await client.connect();
    db= con.db(dbName);
    console.log('mongoDb Connected');
    }
    catch(error)
    {
        console.log('Db not Connected');
    }
    
}

module.exports= {db, connect};
