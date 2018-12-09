// CSV database, can be swapped out for real database like mongo
// TODO: Treats all fields as strings

var fs = require('fs');

function DatabaseCSV(db) {
  // db is the directory for the 'logical database'
  // each file within the directory will be a table
  this.root = __dirname + '/' + db;

  // if the directory does not exist create it
  try {
    fs.mkdirSync(this.root);
  } catch (e) {
    if (e.code != 'EEXIST') {
      throw e;
    }
  }
}

DatabaseCSV.prototype.insertRow = function(tableName, row) {
  // insertRow just adds a new CSV row to the end of the file
  // it creates the file if it does not already exit
  
  // check and see if the table exists first
  var path = this.root + '/' + tableName + '.csv';
  var contents = '';
  try {
    contents = fs.readFileSync(path);
  } catch (e) {
    if (e.code != 'ENOENT') {
      throw e;
    }
    for (var k in row) {
      contents += '"' + k + '",';
    }
    // remove trailing comma
    contents = contents.slice(0,-1);
    contents += '\n';
  }
  for (var k in row) {
    contents += '"' + row[k] + '",';
  }
  // remove trailing comma
  contents = contents.slice(0,-1);
  contents += '\n';
  fs.writeFileSync(path, contents, 'utf8');
};

module.exports = DatabaseCSV;