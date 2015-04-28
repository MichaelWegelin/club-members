app.service('MembersSvc', function($http) {
  this.fetch = function() {
    return $http.get("/api/members")
  }
  this.create = function(member) {
    return $http.post("/api/members", member)
  }
})
