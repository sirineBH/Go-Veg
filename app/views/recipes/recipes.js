'use strict';

angular.module('myApp.recipes', ['ngRoute', 'myApp.recipeCard', 'myApp.rating'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/recipes', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'recipesController'
      })

      .when('/recipes/Biscuits', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'biscuitsController'
      })

      .when('/recipes/Bread', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'breadController'
      })

      .when('/recipes/Desserts', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'dessertsController'
      })

      .when('/recipes/Egg', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'eggController'
      })

      .when('/recipes/Omelet', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'omeletController'
      })

      .when('/recipes/Pancake', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'pancakeController'
      })

      .when('/recipes/Preps', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'prepsController'
      })

      .when('/recipes/Salad', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'saladController'
      })

      .when('/recipes/Sandwiches', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'sandwichesController'
      })

      .when('/recipes/Soup', {
        templateUrl: 'views/recipes/recipes.html',
        controller: 'soupController'
      })
  }])

  .controller('recipesController', ['$scope', 'api', function ($scope, api) {

  }]);