const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const blog = require('./routers/blogrouter'); 
const login = require('./routers/loginrouter'); 
const port=process.env.PORT || 5000  
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://Hospital_Project:EuqASExlGld6YoTd@cluster0.kvzsn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

  
const app = express(); 

app.use(cors({
    origin: '*'
}));
app.use(express.json());


  
app.use(blog); 
app.use(login); 



  
app.listen(port, () => { 

    console.log(`listening on :${port}`); 
});