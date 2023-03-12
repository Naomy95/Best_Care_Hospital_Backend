const { MongoClient } = require('mongodb');


const uri = `mongodb+srv://Hospital_Project:EuqASExlGld6YoTd@cluster0.kvzsn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



exports.read = async (req, res) => { 
    await client.connect();
    const database = client.db('hospital_project');
    const blogsCollection = database.collection('blogs');
   
        const cursor = blogsCollection.find({});
        const users = await cursor.toArray();
        res.send(users);
        
};
exports.create = async (req, res) => { 
    try {
        await client.connect();
        const database = client.db('hospital_project');
        const blogsCollection = database.collection('blogs');
        const blog = req.body;
        const result = await blogsCollection.insertOne(blog);
        res.json(result);
        console.log(req.body)
    } catch(err){
        console.log(err)
        res.status(400).json({
            err:err.message
        })
    }
};