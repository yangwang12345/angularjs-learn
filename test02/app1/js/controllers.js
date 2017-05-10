var myCtrls = angular.module('myCtrls', []);

myCtrls.controller('aCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: '首页'
        };
        $scope.userInfo={
            email:'1223@qq.com',
            psw:'123',
            autoLogin:true
        }
        $scope.getFormData=function(){
            console.log($scope.userInfo)
        }
        $scope.setFormData=function(){
            $scope.userInfo={
                email:'4443@qq.com',
                psw:'123',
                autoLogin:true
            }
        }
        $scope.resetForm=function(){
            $scope.userInfo={
                email:'1223@qq.com',
                psw:'123',
                autoLogin:true
            }
        }
    }
]);

myCtrls.controller('bCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: '导航一'
        };
        $scope.isError=false;
        $scope.isWarning=false;
        $scope.showError=function(){
            $scope.message="提示";
            $scope.isWarning=false;
            $scope.isError=true;
        }
        $scope.showWarnning=function(){
            $scope.message="提示";
            $scope.isError=false;
            $scope.isWarning=true;
        }
    }
]);

myCtrls.controller('cCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: '导航二'
        };
        $scope.menu={show:false};
        $scope.toggleMenu=function(){
             $scope.menu.show= !$scope.menu.show;
        }
    }
]);

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
