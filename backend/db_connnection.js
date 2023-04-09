const mongoose = require("mongoose");
const mongoUri = 'mongodb+srv://fevfood:fevfood@cluster0.fanyayv.mongodb.net/fevfoodmern?retryWrites=true&w=majority';

const Connectdb = async ()=>{
    try{
        const connect = await mongoose.connect(mongoUri);
        console.log("Database name",connect.connection.host,connect.connection.name);

        const fetched_data = mongoose.connection.db.collection("db_items");

        const items = await fetched_data.find({}).toArray(); // Await the result of the find() method

        console.log(items);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connectdb;
