const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://fevfood:fevfood@cluster0.fanyayv.mongodb.net/fevfoodmern?retryWrites=true&w=majority';
const mongoDB= async ()=>{
     const con =await mongoose.connect(mongoUri,{useNewUrlParser: true})
    console.log("connected");
}

module.exports = mongoDB