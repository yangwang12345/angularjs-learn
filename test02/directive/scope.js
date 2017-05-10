var myApp=angular.module("helloworld",[]);
// 1、@  将属性作为字符串传递
myApp.controller("myCtrl",["$scope",function($scope){
	$scope.abc="百威";
}]);
myApp.directive("hello",function(){
	return {
		restrict:"AE",
		template:"<div>{{da}}</div>",
		replace:true,
		link:function(scope,element,attr){
			scope.da=attr.da;
		}
	}
})
// 等价于
// myApp.directive("hello",function(){
// 	return {
// 		scope:{
// 			da:'@'
// 		},
// 		restrict:"AE",
// 		template:"<div>{{da}}</div>",
// 		replace:true
// 	}
// })
// 
// 2、= 与父scope中的属性双向绑定
// myApp.controller("myCtr2",["$scope",function($scope){
// 	$scope.world="可口可乐"
// }]);
// myApp.directive("hi",function(){
// 	return {
// 		restrict:"AE",
// 		scope:{
// 			flav:'='
// 		},
// 		template:"<input type='text' ng-model='flav'/>"
// 	}
// })
// 
// 3、&传递一个来自父scope函数
myApp.controller("myCtr3",["$scope",function($scope){
	$scope.sayHello=function(name){
		alert("hello:"+name)
	}
}]);
myApp.directive("greeting",function(){
	return {
		restrict:"AE",
		scope:{
			greet:'&'
		},
		template:"<br/><input type='text' ng-model='usename'/><br/><button ng-click='greet({name:usename})'>Greeting</button></br>"
	}
})