/// <reference path="_app.ts" />
module app {
    'use strict';

    export interface IUserScope extends ng.IScope {
        user: any;
        username: String;
        repoSortOrder: String;
        error: String;
        repos: any;
        seeRepoCollabs: any;
    }

    export interface IUserParams extends ng.route.IRouteParamsService {
        username: String;
    }

    export class UserController {
        public static $inject = ['$scope', 'github', '$routeParams', '$location'];

        constructor(private $scope: IUserScope,
            private github: Github,
            private $routeParams: IUserParams,
            private $location: ng.ILocationService) {

            var onUserComplete = (data) => {
                $scope.user = data;
                github.getRepos($scope.user).then(onRepos, onError);
            };

            var onError = (reason) => {
                $scope.error = "Could not fetch the user";
            }

            var onRepos = (data) => {
                $scope.repos = data;
            };

            $scope.seeRepoCollabs = (data) => {
                $location.path("/repo/" + data.full_name);
            };

            $scope.username = $routeParams.username;
            $scope.repoSortOrder = '-stargazers_count'
            github.getUser($scope.username).then(onUserComplete, onError);
        }
    }

    angModule.controller("userController", UserController);
}