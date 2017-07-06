angular.module('Sbecker', ['ngRoute']);
// .config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider)
// .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)

// --- real -> angular.module('Sbecker').config(function($routeProvider, $locationProvider){
angular.module('Sbecker').config(function($routeProvider, $locationProvider){
  // remove o # da url

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  })
  .when('/empresa',{
    templateUrl: 'views/empresa.html',
    controller: 'empresaCtrl',
    //result
  })
  .when('/atletas', {
    templateUrl: 'views/atletas.html',
    controller: 'atletasCtrl'
  })
  .when('/contato', {
    templateUrl: 'views/contato.html',
    controller: 'contatoCtrl'
  })
  .otherwise({redirectTo: 'views/404.html'});
  // enable html5Mode for pushstate ('#'-less URLs)
  $locationProvider.html5Mode(false)
  .hashPrefix('!');
});
