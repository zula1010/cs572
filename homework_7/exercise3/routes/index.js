var express = require('express');
var router = express.Router();

const myData = [];


/* GET home page. */
router.get('/', function (req, res, next) {
  let collection = req.dbcollection.find({}).toArray();
  collection.then(data => res.json(data));
});
router.post('/search/:lec', function (req, res, next) {
  if (req.params.lec) {
    let doc = req.dbcollection.findOne({ 'lecture': req.params.lec });
    doc.then((data) => res.json(data));
  }
});
router.post('/', function (req, res) {
  if (req.body) {
    req.dbcollection.insertOne(req.body);
    let collection = req.dbcollection.find({}).toArray();
    collection.then(data => res.json(data));
  }
})
router.put('/', function (req, res, next) {
  if (req.body) {
    req.dbcollection.save(req.body)
    let collection = req.dbcollection.find({}).toArray();
    collection.then(data => res.json(data));
  }
});
router.delete('/delete/:id', function (req, res, next) {
  if (req.params.id) {
    req.dbcollection.deleteOne({ "_id": req.params.id });
    let collection = req.dbcollection.find({}).toArray();
    collection.then(data => res.json(data));
  }
})
module.exports = router;
