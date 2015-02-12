var cina = angular.module('cina', ['ui.bootstrap'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
})

    .controller('MainCtrl', [function() {
        var self = this;
        self.kir = "khar";
        self.a="daste"
    }])
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