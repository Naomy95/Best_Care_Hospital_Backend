const  Router  = require('express'); 
const {read,create,remove, update}=require('../controllers/appointmentControllar')
const app = Router(); 


app.get('/appointments', read)
app.post('/createappointment', create)
app.put('/appointment/:appointmentId', update)
app.delete('/appointment/:appointmentId', remove)

module.exports = app;