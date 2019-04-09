

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://julia:1234@homework7-gh7c0.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri);

function dbConnection() {
    return function (req, resp, next) {
        client.connect(err => {
            if (err) throw err;
            const collection = client.db("data").collection("course");
            if (collection) {
                req.dbcollection = collection;
                next()
            }
            else console.error();
        });
    }
}
module.exports = dbConnection;