angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, $stateParams, mainSrv){
  var idx = $stateParams.bookedId
  $scope.bookName = mainSrv.travelInfo[idx].city;
  $scope.bookImage = mainSrv.travelInfo[idx].image;
})
