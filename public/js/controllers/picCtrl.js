angular.module('app')
    .controller('picCtrl', function($scope, makeMenu){
        $scope.links = makeMenu.getMenu();
    });