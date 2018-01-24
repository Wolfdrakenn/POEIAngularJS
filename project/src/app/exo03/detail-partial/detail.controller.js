(function() {
  'use strict';

  function DetailCtrl() {
    var vm = this;
    vm.msg = 'SHIKIBAM';
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();