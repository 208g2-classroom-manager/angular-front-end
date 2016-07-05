(function () {
    angular.module('login')
        .controller('LoginCtrl',['$scope','loginService','$rootScope','$location',
            function ($scope,loginService,$rootScope, $location) {
                $scope.login = function () {

                    var request = {
                        username: $scope.login.username,
                        password: $scope.login.password
                    };
                    loginService.login(request)
                        .then(function(response){
                            $scope.displayName = {title: response.data.fullName};
                            $rootScope.tokenAuth = response.data.token;
                            $rootScope.username = response.data.fullName;
                            localStorage.setItem('User-Data',response.data.token);
                            $rootScope.tokenAuth = localStorage['User-Data'];
                            $location.path('/classroom');
                        },function (error, data) {
                            $scope.data = {title: 'failure'}
                        })
                }
            
        }])
}());