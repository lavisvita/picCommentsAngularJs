angular.module('app')
    .controller('homeCtrl', function($scope, makeMenu){
        $scope.links = makeMenu.getMenu();
    });