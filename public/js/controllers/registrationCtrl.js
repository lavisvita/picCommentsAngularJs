angular.module('app')
    .controller('registrationCtrl', function($scope, makeMenu){
        $scope.links = makeMenu.getMenu();
        $scope.login = '';
        $scope.password = '';
        $scope.getAuthData = function(login, password){
            console.log('login: '+login, 'password: ' + password);
        }
    });