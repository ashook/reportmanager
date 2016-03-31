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
      when('/addReport', {
	    templateUrl: 'assets/editReport.html',
	    controller: 'AddReportCtrl'
	  }).
      when('/editReport/:reportId', {
        templateUrl: 'assets/editReport.html',
        controller: 'EditReportCtrl'
      }).
      otherwise({
        redirectTo: '/reports'
      });
  }]);