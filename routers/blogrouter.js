const { Router } = require('express'); 
const blog=require('../controllers/blogcontroller')
const app = Router(); 

  

app.get('/', blog)

  
module.exports = app;