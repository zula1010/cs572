var express = require('express');
var router = express.Router();
const myGrades = [
    { id: 0, name: 'Asaad Saad', course: 'CS572', grade: 95 },
    { id: 1, name: 'Munkhzul Khurelbaatar', course: 'CS572', grade: 96 },
    { id: 2, name: 'Javkhlan Batsaikhan', course: 'CS572', grade: 97 }
]
function deleteStudent(arr, id) {
    return arr.filter(function (stu) {
        return stu.id != id;
    })
}
router.get('/', function (req, res, next) {
    console.log(myGrades)
    res.send(myGrades);
    res.end();
})
router.get('/:id', function (req, res) {
    if (req.params.id)
        res.send(myGrades[req.params.id]);
    else res.status(404).end();
})

router.post("/", function (req, res, next) {
    if (req.body) {
        myGrades.push(req.body);
        res.end("added");
    }
    else res.status(404).end();
})
router.delete('/:id', function (req, res) {
    if (req.params.id) {
        deleteStudent(myGrades, req.params.id);
        res.end("deleted")
    }
    else res.status(404).end();
})
router.put('/:id', function (req, res) {
    if (req.params.id) {
        myGrades[req.params.id] = req.body;
        res.end("changed");
    }
    else res.status(404).end();
})
module.exports = router;