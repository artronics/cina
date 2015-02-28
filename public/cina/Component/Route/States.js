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