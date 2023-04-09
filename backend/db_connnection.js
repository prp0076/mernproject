const mongoose = require("mongoose");
const Connectdb = async ()=>{
    try{
      const connect = await mongoose.connect('mongodb+srv://fevfood:fevfood@cluster0.fanyayv.mongodb.net/?retryWrites=true&w=majority');
    //   console.log("Database name",connect.connection.host,connect.connection.name)
    console.log("connected")
    }
    catch(err){
     console.log(err);
     process.exit(1);
    }
}
module.exports = Connectdb