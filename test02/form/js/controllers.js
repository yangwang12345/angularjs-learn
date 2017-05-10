var myCtrls = angular.module('myApp', []);

myCtrls.controller('TestFormModule', ['$scope',
    function($scope) {
        $scope.user={
            userName:"admin",
            password:"123"
        };
        $scope.save=function(){
            alert("提交数据")
        }
    }
]);

