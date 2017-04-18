angular.module('app').controller('productDetailsCtrl', function ($scope, shopService, $stateParams) {

    shopService.getProduct($stateParams.id).then(response => {
        $scope.product = response;
    })

})