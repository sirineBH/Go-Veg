'use strict';

angular.module('myApp.openRecipe', [])



    .controller('openRecipe', ['$scope', '$modalInstance', 'recipe',
        function ($scope, $modalInstance, recipe) {

            $scope.recipe = recipe;

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);