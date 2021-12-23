'use strict';

angular.module('myApp.recipeCard', ['myApp.openRecipe', 'myApp.openImage'])

    .directive("recipeCard",
        function () {
            return {
                restrict: 'E',
                scope: {
                    recipe: '='
                },
                controller: ['$scope', '$modal', function ($scope, $modal) {

                    $scope.open = function (link) {
                        var modalInstance = $modal.open({
                            backdrop: 'static',
                            size: 'lg',
                            templateUrl: 'views/recipes/recipe-card/modal/imgModal.html',
                            controller: 'openImage',
                            resolve: {
                                link: function () {
                                    return link;
                                }
                            }
                        });
                        modalInstance.result.then(function (selected) {
                        }, function () {
                        });
                    };

                    $scope.openRecipe = function (recipe) {
                        var modalInstance = $modal.open({
                            backdrop: 'false',
                            size: 'lg',
                            templateUrl: 'views/recipes/recipe-card/modal/recipeModal.html',
                            controller: 'openRecipe',
                            resolve: {
                                recipe: function () {
                                    return recipe;
                                }
                            }
                        });
                        modalInstance.result.then(function (selected) {
                        }, function () {
                        });
                    };
                }],
                templateUrl: "views/recipes/recipe-card/recipe-card.html"
            }
        });