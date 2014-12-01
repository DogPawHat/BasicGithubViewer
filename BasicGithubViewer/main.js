/// <reference path="_app.ts" />
var app;
(function (app) {
    'use strict';

    var MainController = (function () {
        function MainController($scope, $interval, $location) {
            this.$scope = $scope;
            this.$interval = $interval;
            this.$location = $location;
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

            $scope.username = "DogPawHat";
            $scope.countdown = 5;
            startCountdown();
        }
        MainController.$inject = ['$scope', '$interval', '$location'];
        return MainController;
    })();
    app.MainController = MainController;

    app.angModule.controller("mainController", MainController);
})(app || (app = {}));
//# sourceMappingURL=main.js.map
