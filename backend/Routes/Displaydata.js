const express = require("express");
const Router = express.Router();//router call yahi pr hora hai
Router.post('/fooddata',(req,res)=>{
try {
    console.log(global.db_items)
    res.send([global.db_items,global.food_cat])
} catch (error) {
    console.log(error.message);
    res.send("Server Error")
}
})
module.exports=Router