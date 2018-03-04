// ROUTES

//use this for angular-route@1.6.9
// weatherApp.config(function ($routeProvider,$locationProvider) {
weatherApp.config(function ($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: "src/pages/home.html",
        controller: "homeController"
    })
    
    .when('/forecast', {
        templateUrl: 'src/pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'src/pages/forecast.html',
        controller: 'forecastController'
    })

    //use this for angular-route@1.6.9
    // $locationProvider.hashPrefix('');
    
});