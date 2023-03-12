const { Router } = require('express'); 
const {read,create}=require('../controllers/blogcontroller')
const app = Router(); 

  

app.get('/', read)
app.post('/blogs', create)

  
module.exports = app;