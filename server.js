// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/'));
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/contact.html"));
});
app.get("/skills", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/skills.html"));
});
app.get("/work", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/work.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
