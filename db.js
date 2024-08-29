//code for connecting to database
const mongoose = require("mongoose");
var mongoURL='mongodb+srv://Gargi:GGgg%401234@cluster0.sio02iz.mongodb.net/Restaurant-site';

mongoose.connect(mongoURL, {useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection

db.on('connected',()=>{
    console.log("MongoDb connection successfull");
})

db.on('error',()=>{
    console.log("MongoDb connection failed");
})

module.exports = mongoose