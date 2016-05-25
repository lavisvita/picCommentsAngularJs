angular.module('app').service('makeMenu', function() {
    var menu = [
        'home',
        'pictures',
        'addpicture',
        'registration',
        'signin'
    ];

    this.getMenu = function() {
        return menu;
    };
});