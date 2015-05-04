var Person = require('../../models/person');
var router = require('express').Router();

router.get('/', function(req, res) {
  console.log('get request for people received!');
  Person.find()
    .sort('lastname')
    .exec(function(err, people) {
      if(err) { console.log(err); return next(err); }
      res.json(people);
    });
});

router.post('/', function(req, res) {
  console.log('post request for person received!');
  console.log(req.body.email);
  console.log(req.body.gender);
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  console.log(req.body.roles);

  var person = new Person({
    email:     req.body.email,
    gender:    req.body.gender,
    firstname: req.body.firstname,
    lastname:  req.body.lastname,
    lists:     req.body.lists    
  });
  person.save(function(err, person) {
    if(err) {return next(err);}
    res.status(201).json(person);
  })
});

module.exports = router;
