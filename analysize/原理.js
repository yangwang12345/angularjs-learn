// 常见一个ng-app
var myModule = angular.module("MyModule1", []);
myModule.controller('MyCtrl', ['$scope', function($scope) {
	$scope.gamename = "hello game"
}]);
// 手动启动，少用
angular.element(document).ready(function() {
	angular.bootstrap(app1, ['MyModule1'])
})