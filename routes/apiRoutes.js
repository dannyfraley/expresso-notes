var router = require("express").Router();
var db = require("../db/db.json");

router.get("/api/notes", function(req,res){
    res.json(db)
})

module.exports = router