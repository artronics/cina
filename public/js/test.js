var myApp = angular.module('myApp', ["ui.router"], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
})

    .controller('MainCtrl', [function() {
        var self = this;
        self.kir = "khar";
        self.a="daste"
    }])

    .config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /route1
        //$urlRouterProvider.otherwise("/route1")

        $stateProvider
            .state('root',{
                url: "/",
                template: "<div ui-view></div>"
            })

            .state('root.route1', {
                url: "/route1",
                template: "route1.html"
            })
            .state('root.route1.list', {
                url: "/list",
                template: "route1.list.html",
                controller: function($scope){
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })

            .state('root.route2', {
                url: "/route2",
                template: "route2.html"
            })
            .state('root.route2.list', {
                url: "/list",
                template: "route2.list.html",
                controller: function($scope){
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
    });
    //.controller('AccordionCtrl', [function() {
    //    var self = this;
    //
    //    self.oneAtATime = true;
    //    self.status = {
    //        isFirstOpen: true,
    //        isFirstDisabled: false
    //    };
    //    self.groups = [
    //        {
    //            title: "salaaaam",
    //            content: "balaaaaaam"
    //        },
    //        {
    //            title: "dovvomi",
    //            content: "balaaaaaam"
    //        }
    //    ];
    //}]);