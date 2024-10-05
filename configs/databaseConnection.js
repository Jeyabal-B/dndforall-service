const mongoose = require('mongoose');

//configuring mongoDB using mongoose driver
const uri = "mongodb://localhost:27017";

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(uri);
        console.log("Database connected at : ", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;