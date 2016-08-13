app.config(function($routeProvider){
    $routeProvider.when("/Home",{templateUrl:"home.html",controller:"ctrl"
    }).when("/Electronics",{templateUrl:"electronics.html",controller:"ctrl"
                           }).when("/Clothing",{templateUrl:"clothing.html",controller:"ctrl"
                                               }).when("/Books",{templateUrl:"books.html",controller:"ctrl"
                                                                }).otherwise({template:"Error page, No Match Found",redirectTo:"/Home"});
});