(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('products.seller')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'seller', {
      title: '商品管理',
      state: 'seller.products.list'
    });
  }
}());
