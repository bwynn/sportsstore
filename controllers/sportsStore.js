angular.module('sportsStore')
 .constant("dataUrl", "http://localhost:5500/products")
  .controller('sportsStoreCtrl', function($scope, $http, dataUrl) {           // define the controller
  $scope.data = {};                                           // create an array object
    $http.get(dataUrl)
      .success(function (data) {
        $scope.data.products = data;
      })
      .error(function (error) {
        $scope.data.error = error;
      });
});
