var db = require('../db');

var User = db.model('User', {
  personID:      {type: String, required: true},
  passwordHash: {type: String, required: true},
  roles:         [String]
});

module.exports = User;
