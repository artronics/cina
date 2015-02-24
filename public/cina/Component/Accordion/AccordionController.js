angular.module('accordion')

    .controller('AccordionCtrl', ['AccordionItemsService', function(itemsService) {
        var self = this;

        self.oneAtATime = true;
        self.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        self.menu = itemsService;
    }]);