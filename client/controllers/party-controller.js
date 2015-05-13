angular.module("deckbuilder").controller("PartiesListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.parties = $meteor.collection(Parties);
    }]);

