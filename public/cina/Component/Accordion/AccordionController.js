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