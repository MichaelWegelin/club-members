var User = require('../../models/user');
var router = require('express').Router();

router.get('/', function(req, res) {
  console.log('get request for users received!');
  User.find()
    .sort('_id')
    .exec(function(err, users) {
      if(err) { return next(err); }
      res.json(users);
    });
});

router.post('/', function(req, res) {
  console.log('post request for user received!');
  console.log(req.body.personID);
  console.log(req.body.password);
  console.log(req.body.roles);

  var user = new User({
    personID:     req.body.personID,
    passwordHash: req.body.password,  // todo: create hash from password
    roles:        req.body.roles    
  });
  user.save(function(err, user) {
    if(err) {return next(err);}
    res.status(201).json(user);
  });
});

module.exports = router;
