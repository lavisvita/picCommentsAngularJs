angular.module('app')
    .service('singinServ',function($http){
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        this.sendSinginData = function(formData){
            console.log(formData);
            $http.post(
                '/signin', formData, config)
                .then(
                function(response){
                    console.log(response.data.answer);
                },
                function(response){
                    console.log('Request failed' + response.data);
                }
            );

        }

    });