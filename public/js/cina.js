//var cina = angular.module('cina', ['ui.bootstrap']);
angular.module('cina',
    [   'accordion',
        'ngResource',
        'ui.bootstrap',
        'ui.bootstrap.showErrors',
        'ui.router']
    , function($interpolateProvider) {
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

    .controller('AccordionCtrl', ['AccordionItemsService', function(itemsService) {
        var self = this;

        self.oneAtATime = true;
        self.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        self.menu = itemsService;
    }]);
angular.module('accordion')
    .factory('AccordionItemsService',[function(){
        var menu =[
            {
                id: 0,
                title: "Contacts",
                state: 'contact',
                link: '/contact',
                subtitles: [
                    {
                        id: 0,
                        title: 'Create',
                        state: 'contact.create',
                        link: '/contact/create',
                        icon:'bar'
                    },
                    {
                        id: 1,
                        title: 'Edit',
                        state: 'contact.edit',
                        link: '/kir',
                        icon: 'bar'
                    },
                    {
                        id: 2,
                        title: 'Delete',
                        state: 'contact.delete',
                        link: 'api/edit',
                        icon: 'bar'
                    }]
            }
        ];

        return menu;
    }]);
angular.module('cina')
    .controller('ContactCtrl',[function(){
        var self = this;
        self.contact = {
            firstName:'jalal',
            lastName: 'hos',
            email: 'jkj@kjk.jl'
        };
        self.create = function(){

        };
    }]);
angular.module('cina')
    .directive('formGroup',[function(){
        return {

            template:
            '<div class="form-group">' +
            '<label for="<% for %>" ng-bind="label"></label>'+
                //'<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
            '<div class="controls" ng-transclude></div>'+
            '</div>',

            replace: true,
            transclude:true,

            scope: {
                label: "@" // Gets the string contents of the `label` attribute.
            },

            link: function(scope, element){
                // The <label> should have a `for` attribute that links it to the input.
                // Get the `id` attribute from the input element
                // and add it to the scope so our template can access it.
                var id = element.find("input").attr("id");
                scope.for = id;
            }
        };
    }]);
angular.module('cina')
    .directive('formGroupHalf',[function(){
        return {

            template:
            '<div class="form-group">' +
                '<label for="<% for %>" ng-bind="label"></label>'+
                //'<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                '<div class="controls" ng-transclude></div>'+
            '</div>',

            replace: true,
            transclude:true,
            //require: "^form",

            scope: {
                label: "@" // Gets the string contents of the `label` attribute.
                //isError: "="
            },

            link: function(scope, element, attrs, formCtrl){
                // The <label> should have a `for` attribute that links it to the input.
                // Get the `id` attribute from the input element
                // and add it to the scope so our template can access it.
                var id = element.find("input").attr("id");
                scope.for = id;

                //// Get the `name` attribute of the input
                //var inputName = element.find("input").attr("name");
                //// Build the scope expression that contains the validation status.
                //// e.g. "form.example.$invalid"
                //var errorExpression = [formCtrl.$name, inputName, "$invalid"].join(".");
                //scope.isError=true;
                //// Watch the parent scope, because current scope is isolated.
                //scope.$parent.$watch(errorExpression, function(isError) {
                //    scope.isError = isError;
                //    scope.isError= true;
                //});
            }
        };
    }]);
angular.module('cina')
 .controller('FormCtrl', [function(){

    }]);
angular.module('cina')
    .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state("contact", {
            url: "/contact",
            templateUrl: "/cina/Component/Template/Contact/contact.index.html"
        })
        .state("contact.edit", {
            url: "/edit",
            templateUrl: "/cina/Component/Template/Contact/contact.edit.html"
        })
        .state("contact.create", {
            url: "/create",
            templateUrl: "/cina/Component/Template/Contact/contact.create.html"
        })
        .state("contact.delete", {
            url: "/delete",
            templateUrl: "/cina/Component/Template/Contact/contact.delete.html"
        });

});
(function() {
  var showErrorsModule;

  showErrorsModule = angular.module('ui.bootstrap.showErrors', []);

  showErrorsModule.directive('showErrors', [
    '$timeout', 'showErrorsConfig', '$interpolate', function($timeout, showErrorsConfig, $interpolate) {
      var getShowSuccess, getTrigger, linkFn;
      getTrigger = function(options) {
        var trigger;
        trigger = showErrorsConfig.trigger;
        if (options && (options.trigger != null)) {
          trigger = options.trigger;
        }
        return trigger;
      };
      getShowSuccess = function(options) {
        var showSuccess;
        showSuccess = showErrorsConfig.showSuccess;
        if (options && (options.showSuccess != null)) {
          showSuccess = options.showSuccess;
        }
        return showSuccess;
      };
      linkFn = function(scope, el, attrs, formCtrl) {
        var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses, trigger;
        blurred = false;
        options = scope.$eval(attrs.showErrors);
        showSuccess = getShowSuccess(options);
        trigger = getTrigger(options);
        inputEl = el[0].querySelector('.form-control[name]');
        inputNgEl = angular.element(inputEl);
        inputName = $interpolate(inputNgEl.attr('name') || '')(scope);
        if (!inputName) {
          throw "show-errors element has no child input elements with a 'name' attribute and a 'form-control' class";
        }
        inputNgEl.bind(trigger, function() {
          blurred = true;
          return toggleClasses(formCtrl[inputName].$invalid);
        });
        scope.$watch(function() {
          return formCtrl[inputName] && formCtrl[inputName].$invalid;
        }, function(invalid) {
          if (!blurred) {
            return;
          }
          return toggleClasses(invalid);
        });
        scope.$on('show-errors-check-validity', function() {
          return toggleClasses(formCtrl[inputName].$invalid);
        });
        scope.$on('show-errors-reset', function() {
          return $timeout(function() {
            el.removeClass('has-error');
            el.removeClass('has-success');
            return blurred = false;
          }, 0, false);
        });
        return toggleClasses = function(invalid) {
          el.toggleClass('has-error', invalid);
          if (showSuccess) {
            return el.toggleClass('has-success', !invalid);
          }
        };
      };
      return {
        restrict: 'A',
        require: '^form',
        compile: function(elem, attrs) {
          if (attrs['showErrors'].indexOf('skipFormGroupCheck') === -1) {
            if (!(elem.hasClass('form-group') || elem.hasClass('input-group'))) {
              throw "show-errors element does not have the 'form-group' or 'input-group' class";
            }
          }
          return linkFn;
        }
      };
    }
  ]);

  showErrorsModule.provider('showErrorsConfig', function() {
    var _showSuccess, _trigger;
    _showSuccess = false;
    _trigger = 'blur';
    this.showSuccess = function(showSuccess) {
      return _showSuccess = showSuccess;
    };
    this.trigger = function(trigger) {
      return _trigger = trigger;
    };
    this.$get = function() {
      return {
        showSuccess: _showSuccess,
        trigger: _trigger
      };
    };
  });

}).call(this);
