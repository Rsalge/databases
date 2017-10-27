var models = require('../models');
// var utils = require('./utils.js');
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(messageData) {
        res.end(String(messageData));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("INSIDE CONTROLER POST");
      models.messages.post(req.body)
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(userData) {
        res.end(String(userData));
      })
    },
    post: function (req, res) {
      console.log("INSIDE CONTROLER POST");
      models.users.post(req.body)
    }
  }
};
