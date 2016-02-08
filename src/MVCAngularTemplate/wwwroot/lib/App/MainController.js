'use strict';

ServerApp.controller('MainController',['$scope','$http',function($scope, $http) {
    
    $scope.Version = '';

    $scope.RefreshVersion = function () {

       // $scope.NotifBusy = $http.get("api/DashboardApi/GetVersion");
        //$scope.NotifBusy.success(function (result) {
            $scope.Version = '1.0';
        //});
    };

}])