

const express = require('express'); 
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const blog = require('./routers/blogrouter'); 
const login = require('./routers/loginrouter'); 

  
const app = express(); 

  
app.use(blog); 
app.use(login); 



  
app.listen(5000, () => { 

    console.log("listening on http://localhost:5000"); 
});