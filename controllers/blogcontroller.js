const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;            


const uri = `mongodb+srv://Hospital_Project:EuqASExlGld6YoTd@cluster0.kvzsn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
const database = client.db('hospital_project');
const blogsCollection = database.collection('blogs');



exports.read = async (req, res) => { 
   
        const cursor = blogsCollection.find({});
        const users = await cursor.toArray();
        res.send(users);
        
};
exports.create = async (req, res) => { 
    try {
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

exports.createID= async (req, res) => {
       
    const id = req.params.blogID;
    const query = {_id:new ObjectId(id)};
    console.log(query)
    const blog = await blogsCollection.findOne(query);
    res.send(blog)
    console.log(blog)
}