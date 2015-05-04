var db = require('../db');

var Person = db.model('Person', {
  email:     {type: String, required: true},
  gender:    {type: String, required: true},
  firstname: {type: String, required: true},
  lastname:  {type: String, required: true},
  lists:     [String]
});

module.exports = Person;
