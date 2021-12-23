'use strict';

angular.module('myApp.openImage', [])



    .controller('openImage', ['$scope', '$modalInstance', 'link',
        function ($scope, $modalInstance, link) {

            $scope.link = link;

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);