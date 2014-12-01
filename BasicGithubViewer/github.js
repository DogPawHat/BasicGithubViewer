/// <reference path="_app.ts" />
var app;
(function (app) {
    'use strict';

    var Github = (function () {
        function Github($http) {
            this.$http = $http;
        }
        Github.prototype.getUser = function (username) {
            return this.$http.get("https://api.github.com/users/" + username).then(function (response) {
                return response.data;
            });
        };

        Github.prototype.getRepos = function (user) {
            return this.$http.get(user.repos_url).then(function (response) {
                return response.data;
            });
        };
        Github.$inject = ['$http'];
        return Github;
    })();
    app.Github = Github;

    app.angModule.service("github", Github);
})(app || (app = {}));
//# sourceMappingURL=github.js.map
