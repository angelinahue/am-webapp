'use strict';

cs142App.controller('UserListController', ['$scope', '$location', '$resource',
    function ($scope, $location, $resource) {
        $scope.main.title = 'Users';

        $scope.nameClicked = function(userObj) {
            $scope.main.user = userObj.first_name + ' ' + userObj.last_name;
            var path = $location.path("/users/" + userObj._id);
            return path;
        };

        var allUsers = $resource("http://localhost:3000/user/list");
        var user = allUsers.query({}, function() {
            $scope.allUsers = user;
            console.log($scope.allUsers);
        });

    }]);

