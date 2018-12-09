var fs = require('fs');
var mustache = require('mustache');

var PageUtils = {};


PageUtils.getLandingPage = function() {
  var s = PageUtils.getHeader("Xplor 2 Adventure");
  s += PageUtils.getLanding();
  s += PageUtils.getFooter();
  return s;
};

PageUtils.getLanding = function() {
  if (!PageUtils.landing) {
    PageUtils.landing = fs.readFileSync('templates/landing.html', 'utf8');
  }
  return mustache.render(PageUtils.landing);
};

PageUtils.getHeader = function(t) {
  if (!PageUtils.header) {
    PageUtils.header = fs.readFileSync('templates/header.html', 'utf8');
  }
  return mustache.render(PageUtils.header, {title: t});
};

PageUtils.getFooter = function() {
  if (!PageUtils.footer) {
    PageUtils.footer = fs.readFileSync('templates/footer.html', 'utf8');
  }
  return mustache.render(PageUtils.footer);
};

PageUtils.getAdventureBar = function() {
  if (!PageUtils.adventureBar) {
    PageUtils.adventureBar = fs.readFileSync('templates/adventureBar.html', 'utf8');
  }
  return mustache.render(app.adventureBar);
};


module.exports = PageUtils;