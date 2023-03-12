

const express = require('express'); 
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const blog = require('./routers/blogrouter'); 
// const jwt= require('jsonwebtoken')
// const secretKey ="secetKey"


  
const app = express(); 

// app.post('/login',(req,res)=>{
//     const user= req.body
//     jwt.sign({user},secretKey,{expiresIn:'86400s'},(err,token)=>{
//         res.json({token})
//     })
// })
  
app.use(blog); 

  
app.listen(5000, () => { 

    console.log("listening on http://localhost:5000"); 
});