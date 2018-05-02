var favicon = require('serve-favicon');
var path = require("path"); 

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3002;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

app.use(favicon(path.join(__dirname,'public', 'assets','images','logo.png')));

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
