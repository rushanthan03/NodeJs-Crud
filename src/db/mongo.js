const { MongoClient, Db } = require("mongodb");
const dbConfig = require("../config/db");
console.log(dbConfig);
const url = dbConfig.mongo.url;

module.exports = new MongoClient(url);

