app.factory("factory", function ($http, $q) {
    var obj = {
        get: function () {
            var d = $q.defer();
            $http.get("../json/menu.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Home: function () {
            var d = $q.defer();
            $http.get("../json/home.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Electronics: function () {
            var d = $q.defer();
            $http.get("../json/electronics.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Clothing: function () {
            var d = $q.defer();
            $http.get("../json/clothing.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Books: function () {
            var d = $q.defer();
            $http.get("../json/books.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Sports: function () {
            var d = $q.defer();
            $http.get("../json/sports.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Mobiles: function () {
            var d = $q.defer();
            $http.get("../json/mobiles.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Tablets: function () {
            var d = $q.defer();
            $http.get("../json/tablets.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Laptops: function () {
            var d = $q.defer();
            $http.get("../json/laptops.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Men: function () {
            var d = $q.defer();
            $http.get("../json/men.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Women: function () {
            var d = $q.defer();
            $http.get("../json/women.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Kids: function () {
            var d = $q.defer();
            $http.get("../json/kids.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Fiction: function () {
            var d = $q.defer();
            $http.get("../json/fiction.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        NonFiction: function () {
            var d = $q.defer();
            $http.get("../json/nonfiction.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        },
        Biography: function () {
            var d = $q.defer();
            $http.get("../json/biography.json").success(function (data) {
                d.resolve(data);
            }).error(function (error) {
                d.reject(error);
            });
            return d.promise;
        }
    }
    return obj;
});