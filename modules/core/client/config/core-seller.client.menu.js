(function () {
  'use strict';

  angular
    .module('core.seller')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: '卖家管理',
      state: 'seller',
      type: 'dropdown',
      roles: ['seller']
    });
  }
}());
