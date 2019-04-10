const express = require('express');
var app = express();
const BodyParser = require("body-parser");

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb+srv://julia:1234@homework7-gh7c0.mongodb.net/test?retryWrites=true");
let db;
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use((req, resp, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('data');
            req.db = db;
            next();
        })
    }
    else {
        req.db = db;
        next();
    }
})
app.post('/', (req, resp) => {
    const collection = req.db.collection("locations");
    collection.insertMany(req.body);
    resp.send("success");
})
app.get('/', (req, resp) => {
    const collection = req.db.collection("locations");
    console.dir(collection);
    collection.createIndex({ coord: '2d' });
    collection.find({ coord: { $near: [41.017654, -91.9665342] } }).limit(3).toArray((err, doc) => {
        resp.json(doc);
    });

})
app.listen(8080, () => console.log("8080"));