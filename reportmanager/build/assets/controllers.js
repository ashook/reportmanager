//# sourceMappingURL=controllers.js.map
var reportControllers=angular.module("reportControllers",[]);reportControllers.controller("ReportCtrl",["$scope","$http",function(a,c){c.get("reports").success(function(b){a.reports=b;a.sreport=a.reports[0]});a.showSummary=function(b){angular.forEach(a.reports,function(d,c){b===d.id&&(a.sreport=d)})}}]);