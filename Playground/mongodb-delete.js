// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
         return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat protein shake'}).then((result) =>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //    console.log(result) ;
    // })
    //db.collection('Users').deleteMany({name: 'Geronimo'});

    // db.collection('Users').findOneAndDelete({ 
    //     _id: new ObjectID("5c3612a92ebb8a27c80a82de")}).then((results)=>{
    //         console.log(JSON.stringify(results, undefined, 2));
    //     });

    // client.close();
});