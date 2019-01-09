// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
         return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo item.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Brad',
    //     age: 50,
    //     location: 'Utah'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Users item.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    // client.close();
});