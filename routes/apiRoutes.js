var router = require("express").Router();
var db = require("../db/db.json");
var uuid = require("uuid");
var fs = require('fs');

router.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
        res.json(JSON.parse(data));
       });
     });

router.post("/api/notes", function (req, res) {
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4()
    }

    fs.readFile("./db/db.json", (err, data) => {
        var jsonNote = JSON.parse(data);
        jsonNote.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(jsonNote), function (err, result) {
            if (err) console.log('error', err);
        });
    });
    res.send("Note created");
});

router.delete("/api/notes/:id", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
        var jsonNote = JSON.parse(data);
        var newNote = jsonNote.filter(note => note.id !== req.params.id);
        fs.writeFile("./db/db.json", JSON.stringify(newNote), function (err, result) {
            if (err) console.log('error', err);
        });
    });
    res.send("Note deleted");
});

module.exports = router