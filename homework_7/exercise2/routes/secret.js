var express = require('express');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
const myData = { "message": "" };
client.connect(function (err) {
    if (err) throw err;
    const query = { _id: 0, key: 1, message: 1 }
    const db = client.db('homework01');
    const collection = db.collection("data");
    const data = collection.findOne({}, { key: 1, message: 1, _id: 0 })
    data.then((data) => {
        var encryptor = require('simple-encryptor')(data.key);
        var decrypted = encryptor.decrypt(data.message);
        myData.message = decrypted;
    })
    client.close();
})
router.get('/', function (req, res, next) {
    res.send(myData);
    res.end();
});
module.exports = router;