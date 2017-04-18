angular.module('app').controller('shopControl', function ($scope, shopService) {

    shopService.getProducts().then(function (response) {
        console.log(response)
        $scope.allProducts = response
    })

})