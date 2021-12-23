'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/addRecipe', {
      templateUrl: 'views/addRecipe/addRecipe.html',
      controller: 'addRecipeController'
    });
  }])

  .controller('addRecipeController', [function () {

  }]);