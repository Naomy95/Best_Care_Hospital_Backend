const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;            
const express = require('express'); 
var bodyParser = require('body-parser')

const app =express()

app.use(express.json())
app.use(bodyParser.json())

const uri = `mongodb+srv://Hospital_Project:EuqASExlGld6YoTd@cluster0.kvzsn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
const database = client.db('hospital_project');
const blogsCollection = database.collection('blogs');
const commentsCollection = database.collection('blogComments');



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
    } catch(err){
        console.log(err)
        res.status(400).json({
            err:err.message
        })
    }
};

exports.readID= async (req, res) => {
       
    const id = req.params.blogID;
    const query = {_id:new ObjectId(id)};
    console.log(query)
    const blog = await blogsCollection.findOne(query);
    res.send(blog)
    console.log(blog)
}

exports.creatComments = async (req, res) => { 
    try {
        console.log(req.body)
        const user = req.body;
    const filter = { uid: user.uid };
    const options = { upsert: true };
    const updateDoc = { $push :{comments:user.comment} };
    const result = await commentsCollection.updateOne(filter, updateDoc, options);
    res.json(result);
    } catch(err){
        console.log(err)
        res.status(400).json({
            err:err.message
        })
    }
};

exports.readComments= async (req, res) => {
       
    const id = req.params.commentID;
    const query = {uid:id};
    console.log(query)
    const comments= await commentsCollection.findOne(query);
    res.send(comments)
    console.log(comments)
}