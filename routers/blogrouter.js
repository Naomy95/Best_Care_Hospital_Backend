const  Router  = require('express'); 
const {read,create,createID}=require('../controllers/blogcontroller')
const app = Router(); 


app.use(Router.json());

app.get('/', read)
app.post('/blogs', create)
app.get('/blogs/:blogID', createID)

  
module.exports = app;