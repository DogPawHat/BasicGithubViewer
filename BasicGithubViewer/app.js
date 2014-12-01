/// <reference path="_app.ts" />
var app;
(function (app) {
    'use strict';

    app.angModule = angular.module('app', ["ngRoute"]).config(function ($routeProvider) {
        $routeProvider.when("/main", {
            templateUrl: "main.html",
            controller: "mainController"
        }).when("/user/:username", {
            templateUrl: "user.html",
            controller: "userController"
        }).when("/repo/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "repoController"
        }).otherwise({ redirectTo: "/main" });
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map
