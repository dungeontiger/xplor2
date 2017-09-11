var express = require('express');
var fs = require('fs');
var mustache = require('mustache');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Xplor 2.0!')
});

// main page that renders an adventure, the 'game' page
app.get('/adventure', function (req, res) {
  var s = app.getHeader("Xplr 2 Adventure");
  s += '<div class="container bg-info" style="height:100%; overflow:auto">Messages go here</div>';
  s += app.getAdventureBar();
  s += app.getFooter();
  
  res.send(s);
});

app.listen(3000, function () {
  console.log('Ready');
});

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
