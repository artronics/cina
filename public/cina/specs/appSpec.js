describe('Controller: MainCtrl', function(){

    beforeEach(module('cina'));

    var ctrl;


    beforeEach(inject(function($controller){
        ctrl= $controller('MainCtrl');
    }));

    it('act', function(){
        expect(ctrl.kir).toEqual('khar');
    });


});