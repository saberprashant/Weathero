// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', 
            function($scope, cityService) {
    
    $scope.home={
        city:''
    }
    $scope.home.city = cityService.city;
    
    $scope.$watch('home.city', function() {
       cityService.city = $scope.home.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams',
 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '5';
    
    APIKEY = "";  //paste your api key here
    APIURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + APIKEY;
    $scope.weatherAPI = $resource(APIURL, { callback: "JSON_CALLBACK" }, 
                        { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToCelsius = function(degK) {
        
        return Math.round(degk - 273.15);
        
    }

    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);
