var TriRankApp = angular.module('triRankApp', ['triRankApp.controllers', 'todoService','ngRoute']);

// Definition des routes. Pour chaque adresse web, association à un fragment html et son controleur pour affichage dans le navigateur

TriRankApp.config( 
  function($routeProvider) {
    $routeProvider
    .when('/athlete', {templateUrl: 'partial/Athlete.html', controller: 'athleteController'})
    .when('/todo',    {templateUrl: 'partial/Todo.html', controller: 'todoController'})
    .otherwise({redirectTo: '/todo'});
  });
