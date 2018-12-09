// manages database access, can be swapped out for real database like mongo
var DatabaseCSV = require('./databaseCSV');

var Users = {
  database: new DatabaseCSV('users')
};

Users.landingSignup = function(email, password, confirm) {
  // TODO: input validation and a error reporting
  // TODO: encrypt password etc.
  var row = {
    email: email,
    password: password
  };

  this.database.insertRow('users', row);
};

module.exports = Users;