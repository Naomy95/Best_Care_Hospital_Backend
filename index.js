const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const blog = require('./routers/blogrouter'); 
const login = require('./routers/loginrouter'); 

  
const app = express(); 
app.use(cors());
app.use(express.json());


  
app.use(blog); 
app.use(login); 



  
app.listen(5000, () => { 

    console.log("listening on :5000"); 
});