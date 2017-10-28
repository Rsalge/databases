var models = require('../models');
// var utils = require('./utils.js');
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(messageData) {
        res.end(JSON.stringify(messageData));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("INSIDE CONTROLER POST", req.body);

      models.messages.post(req.body, function () {
        res.writeStatus(201);
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(userData) {
        res.end(JSON.stringify(userData));
      })
    },
    post: function (req, res) {
      console.log("INSIDE CONTROLER POST");
      models.users.post(req.body)
    }
  }
};
