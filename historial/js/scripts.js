var myApp=angular.module("myApp",['ui.router']); 

myApp.controller(function $scope)

myApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');


    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
  })

     

})
