angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.parties = $meteor.collection(Parties);
    }]);

