/// <reference path="_app.ts" />
var app;
(function (app) {
    var GithubCollaborators = (function () {
        function GithubCollaborators($http) {
            this.$http = $http;
        }
        GithubCollaborators.prototype.getRepo = function (username, reponame) {
            return this.$http.get("https://api.github.com/repos/" + username + '/' + reponame).then(function (response) {
                return response.data;
            });
        };

        GithubCollaborators.prototype.getRepoCollabs = function (repo) {
            return this.$http.get("https://api.github.com/repos/" + repo.full_name + "/collaborators").then(function (response) {
                return response.data;
            });
        };
        GithubCollaborators.$inject = ['$http'];
        return GithubCollaborators;
    })();
    app.GithubCollaborators = GithubCollaborators;

    app.angModule.service("githubCollabs", GithubCollaborators);
})(app || (app = {}));
//# sourceMappingURL=githubCollaborators.js.map
