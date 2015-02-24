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