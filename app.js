var express = require('express');
var bodyParser = require('body-parser')
var users = require('./users');
var pageUtils = require('./pageUtils');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static('public'));

// display the landing pages
app.get('/', function (req, res) {
  res.send(pageUtils.getLandingPage());
});



app.post('/users/landingSignup', function(req, res) {
  // do the sign up
  users.landingSignup(req.body.email, req.body.password, req.body.confirm);
  res.send('done');
});

app.listen(8080, function () {
  console.log('Ready');
});
