const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const blog = require('./routers/blogrouter'); 
const login = require('./routers/loginrouter'); 
const port=process.env.PORT || 5000  



  
const app = express(); 
app.use(cors());
app.use(express.json());


  
app.use(blog); 
app.use(login); 



  
app.listen(port, () => { 

    console.log(`listening on :${port}`); 
});