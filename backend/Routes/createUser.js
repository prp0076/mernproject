const express = require("express");
const { body, validationResult } = require('express-validator');
const Router = express.Router();//router call yahi pr hora hai
const User = require("../models/User")
Router.post("/createuser",
[body('email').isEmail(),body('name','incorrect name').isLength({min:5}),body('password').isLength({ min: 5 })],
async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
 try {
   await User.create({
       // we can directly send data through below method
        // name:"satyam",
        // password:"satyam",
        // email:"prp313918@gmail.com",
        // location:"jabalpur"

       //if we want to send through body 
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
 } catch (error) {
  res.json({success:false});
  console.log(error)  
 }
})



Router.post("/loginuser",
[body('email').isEmail(),body('password').isLength({ min: 5 })],
async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
   try {
     let userdata= await User.findOne({email})
    if(!userdata){
        return res.status(400).json({ errors:"Try Login with correct credentials"});
    }
    if(req.body.password !== userdata.password){
        return res.status(400).json({ errors:"Try Login with correct credentials"});
    }
    return res.json({success:true})
 } catch (error) {
  res.json({success:false});
  console.log(error)  
 }
})
module.exports = Router
//above we create and login user 