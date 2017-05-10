var myApp = angular.module('helloworld', []);
myApp.directive("superman",function(){
	return {
		scope:{},
		// 独立作用域
		restrict:"AE",
        transclude:true,
        template:"<div><div ng-transclude></div></div>",
		controller:function($scope){
			$scope.ablities=[];
			this.addStrength=function(){
				$scope.ablities.push("strength")
			};
			this.addLight=function(){
				$scope.ablities.push("light")
			};
			this.addSpeed=function(){
				$scope.ablities.push("speed")
			};
		},
		link:function(scope,element,attr){
			element.addClass('btn btn-primary');
			element.bind("mouseenter",function(){
				console.log(scope.ablities)
			})
		}
	}
});
myApp.directive("strength",function(){
	return {
		require:"^superman",
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addStrength();
		}
	}
});
myApp.directive("light",function(){
	return {
		require:"^superman",
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});
myApp.directive("speed",function(){
	return {
		require:"^superman",
		link:function(scope,element,attr,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
});