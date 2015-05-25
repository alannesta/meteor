angular.module('deckbuilder', ['angular-meteor', 'ui.router', 'ngMaterial'])
    .config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider',
        function($urlRouterProvider, $stateProvider, $mdThemingProvider) {

            //$locationProvider.html5Mode(true);

            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('brown')
                .accentPalette('red');

            $stateProvider
                .state('parties', {
                    url: '/parties',
                    templateUrl: 'client/views/index.ng.html',
                    controller: 'PartiesListCtrl'
                })
                .state('probability', {
                    url: '/probability',
                    templateUrl: 'client/views/probability.ng.html',
                    controller: 'ProbabilityController as ctrl'
                })
                .state('build', {
                    url: '/build',
                    templateUrl: 'client/views/build.ng.html',
                    controller: 'BuildController as ctrl'
                })
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'client/views/admin.ng.html',
                    controller: 'AdminController as ctrl'
                });
            $urlRouterProvider.otherwise("/parties");
        }]);
