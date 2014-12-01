/// <reference path="_app.ts" />
var app;
(function (app) {
    'use strict';

    var UserController = (function () {
        function UserController($scope, github, $routeParams, $location) {
            this.$scope = $scope;
            this.github = github;
            this.$routeParams = $routeParams;
            this.$location = $location;
            var onUserComplete = function (data) {
                $scope.user = data;
                github.getRepos($scope.user).then(onRepos, onError);
            };

            var onError = function (reason) {
                $scope.error = "Could not fetch the user";
            };

            var onRepos = function (data) {
                $scope.repos = data;
            };

            $scope.seeRepoCollabs = function (data) {
                $location.path("/repo/" + data.full_name);
            };

            $scope.username = $routeParams.username;
            $scope.repoSortOrder = '-stargazers_count';
            github.getUser($scope.username).then(onUserComplete, onError);
        }
        UserController.$inject = ['$scope', 'github', '$routeParams', '$location'];
        return UserController;
    })();
    app.UserController = UserController;

    app.angModule.controller("userController", UserController);
})(app || (app = {}));
//# sourceMappingURL=user.js.map
