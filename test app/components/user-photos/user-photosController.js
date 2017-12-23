'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams', '$resource',
  function($scope, $routeParams, $resource) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    var allPhotos = $resource("http://localhost:3000/photosOfUser/:userId", {userId: userId});
    var photo = allPhotos.query({}, function() {
        $scope.allPhotos = photo;
    });
  }]);
