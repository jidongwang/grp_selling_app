(function () {
  'use strict';

  angular
    .module('products.services')
    .factory('ProductsService', ProductsService);

  ProductsService.$inject = ['$resource', '$log'];

  function ProductsService($resource, $log) {
    var Product = $resource('/api/products/:productId', {
      productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Product.prototype, {
      createOrUpdate: function () {
        var product = this;
        return createOrUpdate(product);
      }
    });

    return Product;

    function createOrUpdate(article) {
      if (article._id) {
        return article.$update(onSuccess, onError);
      } else {
        return article.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(article) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
