var myApp = angular.module('helloworld', ['ui.router']);
myApp.directive('hello',function(){
    return {
        restrict:'E',
        // AEMC
        template:'<div>hello every one</div>',
        replace:true
    }
})
myApp.config(function ($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('content');
$stateProvider
.state('content',{
    url: '/content',
    views:{
    "":{templateUrl: 'tpls/content.html'},
    "header@content":{templateUrl: 'tpls/header.html'},
    }
})
.state('content.home',{
    url: '/home',
    views:{
    "body@content":{templateUrl: 'tpls/home.html'}
    }
})
.state('content.photos',{
    url: '/photos',
    views:{
    "body@content":{templateUrl: 'tpls/photos.html'}
    }
})
.state('content.about',{
    url:'/about',
    views:{
    "body@content":{templateUrl: 'tpls/about.html'}
    }
})

});
// stateConfig包含的字段：template, templateUrl, templateProvider, controller, controllerProvider, 
// resolve, url, params, views, abstract, onEnter, onExit, reloadOnSearch, data

