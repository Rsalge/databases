var mysql = require('mysql');

var  dbConnection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });
  dbConnection.connect( function(err) {
    if(err) throw err;
    console.log("Connected!");
  });

module.exports = dbConnection;
