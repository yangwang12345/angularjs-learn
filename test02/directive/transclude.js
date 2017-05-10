var myApp = angular.module('helloworld', []);

myApp.directive('hello',function(){
    return {
        restrict:'AE',
        transclude:true,
        template:"<div>hi,every one<div ng-transclude></div></div>",
        compile:function(){
        	// 少用 会覆盖原本的函数
        },
        link:function(){
        	
        }
    }
})
