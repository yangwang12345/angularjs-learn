var myApp = angular.module('helloworld', []);
myApp.controller("myCtrl",['$scope',function($scope){
	$scope.load1=function(){
		console.log("数据正在加载中11")
	}
}]);

myApp.controller("myCtr2",['$scope',function($scope){
	$scope.load2=function(){
		console.log("数据正在加载中22")
	}
}]);
myApp.directive("load",function(){
	return {
		restrict:"AE",
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(event){
				// scope.load();
				scope.$apply(attrs.howtoload)
				// howtoload小写
			})
		}
	}
})

