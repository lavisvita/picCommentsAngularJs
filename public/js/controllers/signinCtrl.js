angular.module('app')
    .controller('signinCtrl', function($scope, singinServ, makeMenu){
        $scope.links = makeMenu.getMenu();
        $scope.getSigninData = function(formData){
            singinServ.sendSinginData(formData);
        }
    });
