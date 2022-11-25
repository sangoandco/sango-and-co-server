const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const makeFindWebWording = require('./make-find-web-wording');
const makeFindUserDetails = require('./make-find-user-details');

const dbName = process.env.DB_NAME;
const user = process.env.USER;
const password = process.env.PASSWORD;

const url = `mongodb+srv://${user}:${password}@sango-and-co.vzmjzxf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function makeDb() {
    await client.connect();
  return client.db(dbName);
}


const findWebWording = makeFindWebWording({ });
const findUserDetails = makeFindUserDetails({ makeDb })

const dataQueries = {
  findWebWording,
  findUserDetails
};

module.exports = dataQueries;
