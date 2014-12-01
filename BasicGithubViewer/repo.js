/// <reference path="_app.ts" />
var app;
(function (app) {
    var RepoController = (function () {
        function RepoController($scope, githubCollabs, $routeParams) {
            this.$scope = $scope;
            this.githubCollabs = githubCollabs;
            this.$routeParams = $routeParams;
            var onRepoComplete = function (data) {
                $scope.repo = data;
                githubCollabs.getRepoCollabs($scope.repo).then(onCollabs, onError);
            };

            var onCollabs = function (data) {
                $scope.collabs = data;
            };

            var onError = function (reason) {
                $scope.error = "Unable to get Collaborator Info";
            };

            $scope.username = $routeParams.username;
            $scope.reponame = $routeParams.reponame;
            githubCollabs.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
        }
        RepoController.$inject = ['$scope', 'githubCollabs', '$routeParams'];
        return RepoController;
    })();
    app.RepoController = RepoController;

    app.angModule.controller("repoController", RepoController);
})(app || (app = {}));
//# sourceMappingURL=repo.js.map
