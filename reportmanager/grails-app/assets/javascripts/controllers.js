'use strict';

/* Controllers */

var reportControllers = angular.module('reportControllers', []);

reportControllers.controller('ReportCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('reports').success(function(data) {
				$scope.reports = data;
				$scope.sreport = $scope.reports[0];
			});

			$scope.showSummary = function(reportId) {
				angular.forEach($scope.reports, function(value, key) {
					if (reportId === value.id) {
						$scope.sreport = value;
						return;
					}
				});
			};
		} ]);

reportControllers.controller('AddReportCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$scope.save = function() {
				$http.post('reports', $scope.report).success(
						function(data, status) {
							//
						});
			};
		} ]);

reportControllers.controller('EditReportCtrl', [ '$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$http.get('reports/' + $routeParams.reportId).success(
					function(data) {
						$scope.report = data;
					});

			$scope.save = function() {
				$http.put('reports/' + $routeParams.reportId, $scope.report)
						.success(function(data, status) {
							//
						});
			};
		} ]);