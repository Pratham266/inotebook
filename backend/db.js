// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook";
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to mongo successfully");
//     })
// }

// module.exports  = connectToMongo;


const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://barotpratham30:pratham@cluster0.jqhzftn.mongodb.net/";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully at atlas");
    })
}

module.exports  = connectToMongo;