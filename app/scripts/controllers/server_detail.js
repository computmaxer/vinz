'use strict';

angular.module('vinzApp')
  .controller('ServerDetailCtrl', ['$scope', 
  									'servers', 
  									'$routeParams', 
function ($scope, servers, $routeParams) {
    
    var serverId = $routeParams.id;
  	$scope.server = servers.getServer(serverId);
  }]);
