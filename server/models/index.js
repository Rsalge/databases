var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM messages", function(err, results, fields) {
        if ( err ) throw err;
        console.log('RESULTS: ', results);
        callback(results);
        //need to do something else with reusults here
      })
    }, // a function which produces all the messages
    post: function (msg) {
      console.log('POST MESSAGE: ', msg);
      var sql = "INSERT INTO messages VALUES "
      db.query(sql, function(err) {
        if(err) throw err;
        console.log("Message Inserted");
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT user FROM users", function(err, results, fields) {
        if ( err ) throw err;
        console.log('RESULTS: ', results);
        callback(results);
        //need to do something else with reusults here
      })
    },
    post: function (msg) {
      var sql = "INSERT INTO users VALUES " + msg;
      db.query(sql, function(err) {
        if(err) throw err;
        console.log("Message Inserted");
      })
    }
  }
};
