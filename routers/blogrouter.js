const  Router  = require('express'); 
const {read,create,readID,creatComments,readComments}=require('../controllers/blogcontroller')
const app = Router(); 


app.get('/', read)
app.post('/blogs', create)
app.get('/blogs/:blogID', readID)
app.post('/comments', creatComments)
app.get('/comments/:commentID', readComments)

  
module.exports = app;