(function () {
  'use strict';

  angular
    .module('core.seller.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('seller', {
        abstract: true,
        url: '/seller',
        template: '<ui-view/>',
        data: {
          roles: ['seller']
        }
      });
  }
}());
