// 模块
var helloModule=angular.module('myApp',[]);
helloModule.controller('HelloAngular',['$scope',function($scope){
    $scope.greeting = {
        text: 'Hello'
    };
}])