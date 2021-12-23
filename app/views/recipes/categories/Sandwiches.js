'use strict';

angular.module('myApp.sandwiches', ['myApp.services', 'myApp.recipeCard'])

    .controller('sandwichesController', ['$scope', 'api', function ($scope, api) {
        $scope.next = false;
        $scope.loading = false;
        $scope.firstLoading = true;
        $scope.recipes = [];

        api.getRecipes("Sandwiches").then(function (response) {
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

