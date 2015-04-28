var db = require("../db")

var Member = db.model("Member", {
  email:     {type: String, required: true},
  gender:    {type: String, required: true},
  firstname: {type: String, required: true},
  lastname:  {type: String, required: true},
  roles:     [String]
})

module.exports = Member
