require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://kongwr:kkwwrr123456@mycluster.zpfzs.mongodb.net/myDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = client;