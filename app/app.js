'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'jkAngularRatingStars',
  'myApp.services',
  'myApp.home',
  'myApp.recipes',
  'myApp.addRecipe',
  'myApp.biscuits',
  'myApp.bread',
  'myApp.desserts',
  'myApp.egg',
  'myApp.omelet',
  'myApp.pancacke',
  'myApp.preps',
  'myApp.salad',
  'myApp.sandwiches',
  'myApp.soup',
  'ui.bootstrap',
  'myApp.openImage',
  'myApp.openRecipe'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });

    //$locationProvider.hashPrefix('!');
    // remove !# from url
    $locationProvider.html5Mode(true);


  }]);
