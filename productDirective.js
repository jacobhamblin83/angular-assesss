angular.module('app').directive('productDir', function(){

    return {
        restrict: 'AE',
        templateUrl: '/views/product-tmpl.html',
        scope: {
            products: '='
        },
        link: function(scope, element, attribute) {
            
        }
    }

})