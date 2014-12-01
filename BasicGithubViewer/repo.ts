/// <reference path="_app.ts" />
module app {

    export interface IRepoScope extends ng.IScope {
        collabs: any;
        repo: any;
        error: string;
        username: string;
        reponame: string;
    }

    export interface ICollabsParams extends ng.route.IRouteService {
        username: string;
        reponame: string;
    }


    export class RepoController {
        public static $inject = ['$scope', 'githubCollabs', '$routeParams'];

        constructor(
            private $scope: IRepoScope,
            private githubCollabs: GithubCollaborators,
            private $routeParams: ICollabsParams
            ) {

            var onRepoComplete = (data) => {
                $scope.repo = data;
                githubCollabs.getRepoCollabs($scope.repo).then(onCollabs, onError);
            };

            var onCollabs = (data) => {
                $scope.collabs = data;
            }

            var onError = (reason) => {
                $scope.error = "Unable to get Collaborator Info"
            }

            $scope.username = $routeParams.username;
            $scope.reponame = $routeParams.reponame;
            githubCollabs.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
        }
    }

    angModule.controller("repoController", RepoController);
} 