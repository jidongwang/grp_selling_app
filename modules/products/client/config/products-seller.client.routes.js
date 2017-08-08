(function () {
  'use strict';

  angular
    .module('products.seller.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('seller.products', {
        abstract: true,
        url: '/products',
        template: '<ui-view/>'
      })
      .state('seller.products.list', {
        url: '',
        templateUrl: '/modules/products/client/views/seller/list-products.client.view.html',
        controller: 'ProductsSellerListController',
        controllerAs: 'vm',
        data: {
          roles: ['seller']
        }
      })
      .state('seller.products.create', {
        url: '/create',
        templateUrl: '/modules/products/client/views/seller/form-product.client.view.html',
        controller: 'ProductsSellerController',
        controllerAs: 'vm',
        data: {
          roles: ['seller']
        },
        resolve: {
          productResolve: newProduct
        }
      })
      .state('seller.products.edit', {
        url: '/:productId/edit',
        templateUrl: '/modules/products/client/views/seller/form-product.client.view.html',
        controller: 'ProductsSellerController',
        controllerAs: 'vm',
        data: {
          roles: ['seller']
        },
        resolve: {
          productResolve: getProduct
        }
      });
  }

  getProduct.$inject = ['$stateParams', 'ProductsService'];

  function getProduct($stateParams, ProductsService) {
    return ProductsService.get({
      productId: $stateParams.productId
    }).$promise;
  }

  newProduct.$inject = ['ProductsService'];

  function newProduct(ProductsService) {
    return new ProductsService();
  }
}());
