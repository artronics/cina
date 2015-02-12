//var cina = angular.module('cina', ['ui.bootstrap']);
angular.module('cina', ['accordion','ui.bootstrap'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
})
    .controller('MainCtrl', [function() {
    var self = this;
    self.kir = "khar";
}]);

angular.module('accordion',['ui.bootstrap']);


//cina
//    .controller('MainCtrl', [function() {
//        var self = this;
//        self.kir = "khar";
//    }])
//    .controller('AlertCtrl',[function(){
//        var self = this;
//        self.kir = "khar";
//        self.alerts = [
//            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
//            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
//        ];
//
//        self.addAlert = function() {
//            self.alerts.push({msg: 'Another alert!'});
//        };
//
//        self.closeAlert = function(index) {
//            self.alerts.splice(index, 1);
//        };
//}]);

angular.module('accordion')

    .controller('AccordionCtrl', [function() {
        var self = this;

        self.oneAtATime = true;
        self.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        self.groups = [
            {
                title: "salaaaam",
                content: "balaaaaaam"
            },
            {
                title: "dovvomi",
                content: "balaaaaaam"
            }
        ];
    }]);