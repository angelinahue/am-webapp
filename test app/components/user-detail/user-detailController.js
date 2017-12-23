'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', '$location', '$resource',
  function ($scope, $routeParams, $location, $resource) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    var User = $resource("http://localhost:3000/user/" + userId);
    var userDetails = User.get({}, function() {
        $scope.userDetails = userDetails;
    });

    $scope.seePhotos = function(userId){
        var path = $location.path("/photos/" + userId);
        return path;
    };
  }]);