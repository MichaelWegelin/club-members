app.service('PeopleSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/people')
  }
  this.create = function(person) {
    return $http.post('/api/people', person)
  }
})
