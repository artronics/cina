angular.module('cina', [])
    .controller('MainCtrl', [function() {
        this.helloMsg = 'Hello ';
        console.log("inja");
        var goodbyeMsg = 'Goodbye ';
        var self = this; self.notes = [
            {id: 1, label: 'First Note', done: false}, {id: 2, label: 'Second Note', done: false}, {id: 3, label: 'Done Note', done: true}, {id: 4, label: 'Last Note', done: false}
        ];
    }]
);