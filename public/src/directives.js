// DIRECTIVES
weatherApp.directive("weatherReport", function() {
    return {
       restrict: 'E',
       templateUrl: 'src/directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});