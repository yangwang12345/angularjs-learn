var myApp = angular.module('helloworld', []);

// 注射器加载完所有模块时，此方法执行一次
myApp.run(function($templateCache){
    $templateCache.put("hello.html","<div>Hi</div>")
});

myApp.directive('hello',function($templateCache){
    return {
        restrict:'AECM',
        template:$templateCache.get("hello.html"),
        replace:true
    }
})


