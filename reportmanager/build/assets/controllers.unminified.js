'use strict';

/* Controllers */

var reportControllers = angular.module('reportControllers', []);

reportControllers.controller('ReportCtrl', ['$scope', '$http',
  function($scope, $http) {
	$http.get('reports').success(function(data) {
	  $scope.reports = data;
      $scope.sreport = $scope.reports[0];
    });
    
    $scope.showSummary = function(reportId) {
    	angular.forEach($scope.reports, function(value, key) {
      	  if(reportId === value.id){
      		$scope.sreport = value;
      		return;
      	  }
      	});
      };
  }]);
