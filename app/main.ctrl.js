(function () {
    angular.module('myApp')
        .controller('mainCtrl',['$scope','$rootScope','$location',
            function ($scope,$rootScope,$location) {
                
                if (localStorage['User-Data']){
                    console.log("main");
                    $rootScope.loggedIn = true;
                    $rootScope.username =  localStorage['username'];
                }else {
                    $rootScope.loggedIn = false;
                    $location.path('/login');
                }
                $scope.logOut = function () {
                    localStorage.clear();
                    $scope.loggedIn = false;
                    $location.path('/login');

                }

            }])
}());