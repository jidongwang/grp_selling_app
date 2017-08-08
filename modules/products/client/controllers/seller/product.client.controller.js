(function () {
  'use strict';

  angular
    .module('products.seller')
    .controller('ProductsSellerController', ProductsSellerController);

  ProductsSellerController.$inject = ['$scope', '$state', '$window', 'productResolve', 'Authentication', 'Notification'];

  function ProductsSellerController($scope, $state, $window, product, Authentication, Notification) {
    var vm = this;

    vm.product = product;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.product.$remove(function () {
          $state.go('seller.products.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Product deleted successfully!' });
        });
      }
    }

    // Save Product
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.productForm');
        return false;
      }

      // Create a new product, or update the current instance
      vm.product.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('seller.products.list'); // should we send the User to the list or the updated Object's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Product saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, name: '<i class="glyphicon glyphicon-remove"></i> Product save error!' });
      }
    }
  }
}());
