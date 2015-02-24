describe('Controller: AccordionCtrl', function(){

    beforeEach(module('accordion'));

    var ctrl;


    beforeEach(inject(function($controller){
        ctrl= $controller('AccordionCtrl');
    }));

    it('should open one at a time', function(){
        expect(ctrl.oneAtATime).toEqual(true);
    });

   it('sould keep the first one open and enable', function() {
       expect(ctrl.status.isFirstOpen).toBeTruthy();
       expect(ctrl.status.isFirstDisabled).toBeFalsy();
   });


});
