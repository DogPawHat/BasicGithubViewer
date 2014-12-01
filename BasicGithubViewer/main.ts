/// <reference path="_app.ts" />
module app {
    'use strict';

    export interface IMainScope extends ng.IScope {
        search: (username: String) => void;
        countdown: number;
        username: String;
        repoSortOrder: String;
    }

    export class MainController {
        public static $inject = ['$scope', '$interval', '$location'];

        constructor(private $scope: IMainScope,
            private $interval: ng.IIntervalService,
            private $location: ng.ILocationService) {

            var decrementCountdown = function () {
                $scope.countdown -= 1;
                if ($scope.countdown < 1) {
                    $scope.search($scope.username);
                }
            };

            var countdownInterval = null;
            var startCountdown = function () {
                countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
            };

            $scope.search = function (username) {
                $location.path('/user/' + username);
            };
            
            $scope.username = "DogPawHat"
            $scope.countdown = 5;
            startCountdown();
        }
    }

    angModule.controller("mainController", MainController);
}