/// <reference path="_app.ts" />
module app{
    'use strict';

    export var angModule : ng.IModule = angular.module('app', ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/main", {
                    templateUrl: "main.html",
                    controller: "mainController"
                })
                .when("/user/:username", {
                    templateUrl: "user.html",
                    controller: "userController"
                })
                .when("/repo/:username/:reponame", {
                    templateUrl: "repo.html",
                    controller: "repoController"
                })
                .otherwise({ redirectTo: "/main" });
        })
    ;

}