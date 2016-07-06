(function(){
    angular.module('classroomDetail')
        .controller('ClassroomDetailCtrl',['$scope','classroomService','$rootScope','$location','$route','$routeParams',
            function ($scope, classroomService, $rootScope, $location,  $route ,$routeParams) {

                $scope.classId = $routeParams.classId;




            }])
}())