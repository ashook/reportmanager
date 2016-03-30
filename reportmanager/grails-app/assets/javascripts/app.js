'use strict';

/* App Module */

var reportApp = angular.module('reportApp', [
  'ngRoute',
  'reportControllers'
]);

reportApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/reports', {
        templateUrl: 'assets/report.html',
        controller: 'ReportCtrl'
      }).
      when('/home', {
          templateUrl: 'assets/report.html',
          controller: 'ReportCtrl'
        }).
      otherwise({
        redirectTo: '/reports'
      });
  }]);