var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var htmlRoutes = require("./routes/htmlRoutes")
app.use(htmlRoutes);

var apiRoutes = require("./routes/apiRoutes")
app.use(apiRoutes);

app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
});