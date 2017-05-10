var myApp = angular.module('myApp', [
    'ngRoute', 'ngAnimate','myCtrls'
]);
// 依赖注入，模块之间的依赖关系
myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'tpls/a.html',
        controller: 'aCtrl'
    }).when('/one', {
        templateUrl: 'tpls/b.html',
        controller: 'bCtrl'
    }).when('/two', {
        templateUrl: 'tpls/c.html',
        controller: 'cCtrl'
    }).otherwise({
        redirectTo: '/'
    })
});
