const  Router  = require('express'); 
const {create,createProfile}=require('../controllers/logincontroller')
const app = Router(); 



app.post('/login', create)

app.post('/profile', createProfile)


  
module.exports = app;