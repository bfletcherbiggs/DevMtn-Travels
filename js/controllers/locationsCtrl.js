angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $state, $stateParams, mainSrv){
  $scope.locationData = mainSrv.travelInfo;


})
