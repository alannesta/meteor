(function() {

    angular
        .module('deckbuilder')
        .controller('UploadController', ['$scope', '$meteor', function($scope, $meteor) {

            var self = this;
            self.cards = $meteor.collection(Cards);
            self.filteredCards = self.cards;
            self.filter = {};     // the filter

            self.reset = function() {
                self.filter = {};
                self.card = null;
            };
            self.initDatabase = function() {
                Meteor.call('initCollection', function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        self.reset();
                        $scope.$apply();
                    }
                });
            };

            self.cleanCollection = function() {
                Meteor.call('clearCollection', function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        self.reset();
                        $scope.$apply();
                    }
                });
            };

            self.next = function() {

            };

            function filterCards() {
                self.filteredCards = self.cards.filter(function(card) {
                    return (self.filter.class ? (self.filter.class !== 'General' ? card.playerClass === self.filter.class : card.playerClass === undefined) : true) && (self.filter.rarity ? card.rarity === self.filter.rarity : true);
                });
            }

            $scope.$watch(function() {
                return self.card;
            }, function(val) {
                console.log('card selected: ---> ', val);
            }, true);

            // filtering criteria
            $scope.$watch(function() {
                return self.filter
            }, function() {
                filterCards();
            }, true);

        }]);
})();
