var models = require('../models');
var utils = require('./utils.js');
module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      // utils.collectData(request, function(message) {
      // message.objectId = ++objectIdCounter;
      // messages.push(message);
      // utils.sendResponse(response, {objectId: message.objectId}, 201);} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
