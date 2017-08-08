(function () {
  'use strict';

  angular
    .module('products.seller')
    .controller('ProductsSellerListController', ProductsSellerListController);

  ProductsSellerListController.$inject = ['ProductsService'];

  function ProductsSellerListController(ProductsService) {
    var vm = this;

    vm.products = ProductsService.query();
  }
}());
