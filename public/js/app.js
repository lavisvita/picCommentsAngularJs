var app = angular.module('app', ['ngRoute','ngFileUpload'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .when('/pictures', {
                templateUrl: 'pictures.html',
                controller: 'picCtrl'
            })
            .when('/registration', {
                templateUrl: 'registration.html',
                controller: 'registrationCtrl'
            })
            .when('/signin', {
                templateUrl: 'signin.html',
                controller: 'signinCtrl'
            })
            .when('/addpicture', {
                templateUrl: 'addpicture.html',
                controller: 'addPictureCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);