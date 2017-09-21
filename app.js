var express = require('express');
var fs = require('fs');
var mustache = require('mustache');

var app = express();

app.use(express.static('public'));

// main page that renders an adventure, the 'game' page
app.get('/', function (req, res) {
  var s = app.getHeader("Xplor 2 Adventure");
  s += app.getLanding();
  s += app.getFooter();
  
  res.send(s);
});

app.listen(8080, function () {
  console.log('Ready');
});

app.getLanding = function() {
  if (!app.landing) {
    app.landing = fs.readFileSync('templates/landing.html', 'utf8');
  }
  return mustache.render(app.landing);
};

app.getHeader = function(t) {
  if (!app.header) {
    app.header = fs.readFileSync('templates/header.html', 'utf8');
  }
  return mustache.render(app.header, {title: t});
};

app.getFooter = function() {
  if (!app.footer) {
    app.footer = fs.readFileSync('templates/footer.html', 'utf8');
  }
  return mustache.render(app.footer);
};

app.getAdventureBar = function() {
  if (!app.adventureBar) {
    app.adventureBar = fs.readFileSync('templates/adventureBar.html', 'utf8');
  }
  return mustache.render(app.adventureBar);
};
