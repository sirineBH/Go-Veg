'use strict';

angular
    .module('myApp.services', [])
    .service('api', ['$http', function ($http) {
        var api = {};
        api.baseUrl = "https://api.edamam.com/api/recipes/v2?type=public&health=vegetarian"
        api.key = "3a574adb73f2d46ed7f8fe7892e4e66c"
        api.app = "4afd458e";

        this.getRecipes = function (dishType) {

            return $http({
                method: "GET",
                url: api.baseUrl + '&dishType=' + dishType + '&app_id=' + api.app + '&app_key=' + api.key,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        };


        this.getMoreRecipes = function (link) {

            return $http({
                method: "GET",
                url: link,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        };
    }]);