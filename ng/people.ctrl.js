app.controller('PeopleCtrl', function($scope, PeopleSvc) {
  PeopleSvc.fetch().success(function (people) {
    $scope.people = people;
  });
  $scope.addPerson = function() {
    if(
     $scope.personGender &&
     $scope.personFirstname &&
     $scope.personLastname &&
     $scope.personEmail) {
       PeopleSvc.create({
         gender:    $scope.personGender,
         firstname: $scope.personFirstname,
         lastname:  $scope.personLastname,
         email:     $scope.personEmail
       }).success(function(person) {
         $scope.people.unshift(person)
         $scope.personGender    = null
         $scope.personFirstname = null
         $scope.personLastname  = null
         $scope.personEmail     = null
       });
    }
  }
});
