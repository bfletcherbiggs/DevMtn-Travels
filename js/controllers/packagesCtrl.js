angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $state, $stateParams, mainSrv){

  $scope.locationData = mainSrv.travelInfo;



})
