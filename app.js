angular.module("myApp", [])

var app = angular.module("myApp", ["ngRoute", "ui.router"]);


app.config(function($stateProvider) {
    var home = {
        name: 'home',
        url: 'home',
        templateUrl: 'home.html'
    }

    var about = {
        name: 'about',
        url: 'about',
        templateUrl: 'about.html'
    }
    
    $stateProvider.state(home);
   
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })

        .when("/about", {
            templateUrl: "about.html",
        })

        .otherwise({
            redirectTo: '/home'
        });
});