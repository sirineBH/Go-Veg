'use strict';

angular.module('myApp.omelet', ['myApp.services', 'myApp.recipeCard'])

    .controller('omeletController', ['$scope', 'api', function ($scope, api) {
        $scope.next = false;
        $scope.loading = false;
        $scope.firstLoading = true;
        $scope.recipes = [];

        api.getRecipes("Omelet").then(function (response) {
            angular.forEach(response.data.hits, function (value, key) {
                $scope.recipes.push(value);
            });
            $scope.firstLoading = false;
            if (response.data._links.next) {
                $scope.next = true;
                $scope.link = response.data._links.next.href;
            }
            console.log($scope.recipes)
        });

        $scope.loadMore = function () {
            $scope.loading = true;
            api.getMoreRecipes($scope.link).then(function (response) {
                angular.forEach(response.data.hits, function (value, key) {
                    $scope.recipes.push(value);
                });
                $scope.loading = false;
                if (response.data._links.next) {
                    $scope.next = true;
                    $scope.link = response.data._links.next.href;
                }
            });
            console.log($scope.recipes)
        }
    }]);

