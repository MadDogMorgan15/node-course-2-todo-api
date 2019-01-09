// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
         return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c34eb0341f301567065d47f')}).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch ToDos', err);
    // });
    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`To-Dos count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch ToDos', err);
    // });

    db.collection('Users').find({
        name: 'Brad'}).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch Users');
        });
    // client.close();
});