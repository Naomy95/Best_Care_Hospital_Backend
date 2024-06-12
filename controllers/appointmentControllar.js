const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;            

const uri = `mongodb+srv://Hospital_Project:EuqASExlGld6YoTd@cluster0.kvzsn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();




const database = client.db('hospital_project');
const appointmentCollection = database.collection('appointments');




exports.read = async (req, res) => { 
    const cursor = appointmentCollection.find({});
    const users = await cursor.toArray();
    res.setHeader('Access-Control-Allow-Origin','*')
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(users);
}

exports.create = async (req, res) => { 
    try {
        const appointment = req.body;
        const result = await appointmentCollection.insertOne(appointment);
        res.json(result);
        console.log(result)
    } catch(err){
        console.log(err)
        res.status(400).json({
            err:err.message
        })
    }
};

exports.update= async (req, res) => {
    const user = req.body;
    const userId = user.appointment_id
    console.log(userId)
   
    try {
        const result = await appointmentCollection.findOneAndUpdate(
            { appointment_id: userId },  // Match the document with the appointment_id
            { $set: user },    // Set the new data
            { returnOriginal: false } // Return the updated document
        );
        res.json(result)
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'An error occurred while updating the user' });
    }


    console.log(user)
}
exports.remove= async (req, res) => {
    const user = req.params.appointmentId;
    const filter={_id: new ObjectId(user)}
    console.log(filter)
   
    try {
        const result = await appointmentCollection.deleteOne(filter);
        res.json(result)
        // console.log(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'An error occurred while updating the user' });
    }


    // console.log(user)
}

// app.delete('/seats/:id', async (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     const query = { _id:new ObjectId(id) };
//     console.log(query);
//     const result = await seatCollection.deleteOne(query);
//     console.log(result);
//     res.json(result);
// })
