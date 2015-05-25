(function() {
    angular
        .module('deckbuilder')
        .controller('AdminController', ['$scope', '$meteor', function($scope, $meteor) {

            var self = this;

            self.initDatabase = function() {
                Meteor.call('initCollection', function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                    }
                });
            };

            self.cleanCollection = function() {
                Meteor.call('clearCollection', function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                    }
                });
            };

        }]);
})();
