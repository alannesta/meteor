(function() {

    angular
        .module('deckbuilder')
        .controller('BuildController', ['$scope', '$meteor', function($scope, $meteor) {

            var self = this;
            self.cards = $meteor.collection(Cards);
            self.filteredCards = self.cards;
            self.filter = {};     // the filter
            self.senarios = [];

            // md-chips model
            self.tags = [];
            self.selections = [];
            self.chipReadOnly = true;

            self.reset = function() {
                self.filter = {};
                self.card = null;
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
                //self.selections.push(val.name);
            }, true);

            // filtering criteria
            $scope.$watch(function() {
                return self.filter
            }, function() {
                filterCards();
            }, true);

        }]);
})();
