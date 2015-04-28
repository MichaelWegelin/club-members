app.controller('MembersCtrl', function($scope, MembersSvc) {
  MembersSvc.fetch().success(function (members) {
    $scope.members = members
  })
  $scope.addMember = function() {
    if(
     $scope.memberGender &&
     $scope.memberFirstname &&
     $scope.memberLastname &&
     $scope.memberEmail) {
       MembersSvc.create({
         gender:    $scope.memberGender,
         firstname: $scope.memberFirstname,
         lastname:  $scope.memberLastname,
         email:     $scope.memberEmail
       }).success(function(member) {
         $scope.members.unshift(member)
         $scope.memberGender    = null
         $scope.memberFirstname = null
         $scope.memberLastname  = null
         $scope.memberEmail     = null
       })
    }
  }
})
