var TriRankApp = angular.module('triRankApp', ['triRankApp.controllers', 'todoService','ngRoute']);

TriRankApp.config( 
  function($routeProvider) {
    $routeProvider
    .when('/athlete', {templateUrl: 'partial/Athlete.html', controller: 'athleteController'})
    .otherwise({redirectTo: '/athlete'});
  });
