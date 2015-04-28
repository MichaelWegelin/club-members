var Member = require("../../models/member")
var router = require("express").Router()

router.get("/", function(req, res) {
  console.log("get request for members received!")
  Member.find()
  .sort("lastname")
  .exec(function(err, members) {
    if(err) { return next(err) }
    res.json(members)
  })
})

router.post("/", function(req, res) {
  console.log("post request for member received!")
  console.log(req.body.email)
  console.log(req.body.gender)
  console.log(req.body.firstname)
  console.log(req.body.lastname)
  console.log(req.body.roles)

  var member = new Member({
    email:     req.body.email,
    gender:    req.body.gender,
    firstname: req.body.firstname,
    lastname:  req.body.lastname,
    rolse:     req.body.roles    
  })
  member.save(function(err, post) {
    if(err) {return next(err)}
    res.status(201).json(member)
  })
})

module.exports = router
