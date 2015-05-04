var express    = require('express');
var bodyParser = require('body-parser');
var Users      = require('./models/user');
var People     = require('./models/person');
var Lists      = require('./models/list');

var app = express();
app.use(bodyParser.json());
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/people',  require('./controllers/api/people'));
app.use('/api/lists',   require('./controllers/api/lists'));
app.use('/', require('./controllers/static'));

app.listen(3000, function() {
  console.log('Server listening on', 3000)
});
