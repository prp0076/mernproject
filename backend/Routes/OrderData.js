const express = require("express")
const Router = express.Router();
const Order = require("../models/Order")
Router.post('/orderData', async (req,res)=>{
    let data= req.body.order_data
    await data.spilce(0,0,{Order_date:req.body.order_date})
    let eId = await Order.findOne({'email':req.body.email})
    console.log(eId)
    if(eId=== null){
        try {
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error",error.message)
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
        } catch (error) {
            res.send("Server Error",error.message)
        }
    }
})
module.exports=Router