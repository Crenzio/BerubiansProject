var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cheerio = require("cheerio");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

request("https://www.goldstar.com/venues/hollywood-ca/tre-stage", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("ul.upcoming-shows.all").each(function(i, element) {

    // Save the text of the element in a "title" variable
    var show = $("div.up-event");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      show: show
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});