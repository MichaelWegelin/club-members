var List = require('../../models/list');
var router = require('express').Router();

router.get('/', function(req, res) {
  console.log('get request for lists received!');
  List.find()
    .sort('name')
    .exec(function(err, lists) {
      if(err) { return next(err); }
      res.json(lists);
  });
})

router.post('/', function(req, res) {
  console.log('post request for list received!');
  console.log(req.body.name);

  var list = new List({
    name: req.body.name
  });
  list.save(function(err, list) {
    if(err) {return next(err);}
    res.status(201).json(list);
  });
});

module.exports = router;
