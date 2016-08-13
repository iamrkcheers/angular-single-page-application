app.controller("ctrl", function ($scope, factory) {
    $scope.init = function () {
        var msg = factory.get();

        function success(data) {
            $scope.list = data;
        }

        function error(error) {
            $scope.list = error;
        }
        msg.then(success, error);
    }
    $scope.show = function (index) {
        var p = index.object;
        var msg = factory[p]();

        function success(data) {
            $scope.collection = data;
        }

        function error(error) {
            $scope.collection = error;
        }
        msg.then(success, error);
    }
    $scope.e = function (index) {
        var msg = factory[index]();

        function success(data) {
            $scope.p = data;
        }

        function error(error) {
            $scope.p = error;
        }
        msg.then(success, error)
    }
});