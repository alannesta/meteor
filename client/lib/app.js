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
                .state('upload', {
                    url: '/upload',
                    templateUrl: 'client/views/upload.ng.html',
                    controller: 'UploadController as ctrl'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'client/views/test.ng.html'
                });
            $urlRouterProvider.otherwise("/parties");


        }]);
