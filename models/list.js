var db = require('../db');

var List = db.model('List', {
  name:     {type: String, required: true}
});

module.exports = List;
