angular.module('socially', ['angular-meteor', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('parties', {
                    url: '/parties',
                    templateUrl: 'client/views/index.ng.html',
                    controller: 'PartiesListCtrl'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'client/views/test.ng.html',
                });
            $urlRouterProvider.otherwise("/parties");
        }]);
