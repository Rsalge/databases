var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {
      db.query("SELECT message FROM messages", function(err, results, fields) {
        if ( err ) throw err;
        console.log('RESULTS: ', results);
        //need to do something else with reusults here
      })
    }, // a function which produces all the messages
    post: function (msg) {
      var sql = "INSERT INTO messages VALUES " + msg.text;
      db.query(sql, function(err) {
        if(err) throw err;
        console.log("Message Inserted");
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
