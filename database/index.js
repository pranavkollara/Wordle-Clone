const mongoose = require('mongoose');
require('dotenv').config();



async function connectDatabase(){
 try{
   // const mongoClient = new mongodb.MongoClient(process.env.mongo_uri)
   // const databaseConnection = await mongoClient.connect();
   // console.log("db connected boys")
   // return await databaseConnection.db('sample_mflix');

  const client =  await mongoose.connect(process.env.mongo_uri);
   console.log('db connected')
   return client;
 }catch (error){
    console.log(error.message);
    throw error;
 }
}

module.exports.default = connectDatabase();