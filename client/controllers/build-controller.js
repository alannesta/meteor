(function() {

    angular
        .module('deckbuilder')
        .controller('BuildController', ['$scope', '$meteor', function($scope, $meteor) {

            var self = this;
            self.allCards = $meteor.collection(Cards);
            self.filterredCards = [];

            self.step = 1;
            self.selections = [];   // chip collection
            self.senarios = [];      // card combinations
            self.forward = forward;

            self.isArray = function(chip) {
                return chip instanceof Array;
            };

            self.restart = function() {
                self.step = 1;
                self.selections = [];
                self.senario = [];
                self.class = null;
                self.story = null;
            };

            function forward(val) {
                self.selections.push(val);
                self.step++;
            }

            function filterCards() {
                self.filterredCards = self.allCards.filter(function(card) {
                    return self.class ? (self.class !== 'General' ? card.playerClass === self.class : card.playerClass === undefined) : true;
                });
            }

            $scope.$watch(function() {
                return self.class;
            }, function(val) {
                if (val) {
                    filterCards();
                    forward(val);
                }
            });

            $scope.$watch(function() {
                return self.story;
            }, function(val) {
                if (val) {
                    forward(val);
                }
            });


            /*
            *  Legacy Code
            */


            //self.filteredCards = self.cards;
            //self.filter = {};     // the filter
            //self.senarios = [];
            //
            //// md-chips model
            //self.tags = [];
            //self.selections = [];
            //self.chipReadOnly = true;
            //
            //self.reset = function() {
            //    self.filter = {};
            //    self.card = null;
            //};
            //
            //self.next = function() {
            //
            //};
            //
            //function filterCards() {
            //    self.filteredCards = self.cards.filter(function(card) {
            //        return (self.filter.class ? (self.filter.class !== 'General' ? card.playerClass === self.filter.class : card.playerClass === undefined) : true) && (self.filter.rarity ? card.rarity === self.filter.rarity : true);
            //    });
            //}
            //
            //$scope.$watch(function() {
            //    return self.card;
            //}, function(val) {
            //    console.log('card selected: ---> ', val);
            //    //self.selections.push(val.name);
            //}, true);
            //
            //// filtering criteria
            //$scope.$watch(function() {
            //    return self.filter
            //}, function() {
            //    filterCards();
            //}, true);

        }]);
})();
