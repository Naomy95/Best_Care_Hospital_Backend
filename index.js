

const express = require('express'); 

const blog = require('./routers/blogrouter'); 


  
const app = express(); 

  
app.use(blog); 

  
app.listen(5000, () => { 

    console.log("listening on http://localhost:5000"); 
});