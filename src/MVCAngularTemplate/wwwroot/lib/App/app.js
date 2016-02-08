(function () {
   
    var ServerApp = angular.module('ServerApp', [
        // Angular modules 
        'ngRoute'

        // Custom modules 

        // 3rd Party Modules
        
    ]);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/angular', {
                templateUrl: '/Views/Home/AngularTest.html',
                controller: 'MainController'
            })
         .otherwise(
                {
                    redirectTo: '/'
                });


        // $locationProvider.html5Mode(true);
    }

    ServerApp.config(config);






})();