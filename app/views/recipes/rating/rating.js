'use strict';

angular.module('myApp.rating', [])

    .directive("rating",
        function () {
            return {
                restrict: 'E',
                scope: {
                    ratingValue: '=',
                    max: '=',
                    onRatingSelected: '&'
                },
                controller: ['$scope', function ($scope) {

                    var updateStars = function () {
                        $scope.stars = [];
                        for (var i = 0; i < $scope.max; i++) {
                            $scope.stars.push({
                                filled: i < $scope.ratingValue
                            });
                        }
                    };

                    $scope.toggle = function (index) {
                        $scope.ratingValue = index + 1;
                        $scope.onRatingSelected({
                            rating: index + 1
                        });
                    };

                    $scope.$watch('ratingValue', function (oldVal, newVal) {
                        if (newVal) {
                            updateStars();
                        }
                    });
                }],
                templateUrl: "views/recipes/rating/rating.html"
            }
        });