angular.
module('order').
component('orderForm', {
    templateUrl: 'order/order-form.template.html',
    controller: function($scope, roastsService, extrasService, orderService) {
        var initial = {
            name: '',
            type: '',
            roast: '',
            extras: []
        };

        $scope.roasts = roastsService.getRoasts();
        $scope.extras = extrasService.getExtras();

        $scope.save = function(order) {
            orderService.placeOrder(order);
        };

        $scope.reset = function() {
            $scope.order = angular.copy(initial);
        };

        // initialize order object
        $scope.reset();
    }
});
