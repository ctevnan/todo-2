angular.module('todoApp').controller('AnotherController', function($scope, $http) {
  $scope.$watch('githubUsername', function() {
    $http.get('https://api.github.com/users/' + $scope.githubUsername + '/repos')
    .then(function(response) {
      $scope.repos = response.data;
    });
  });
});

//$scope scope is an object that refers to the application model. it is an execution context for expressions. 
//scopes are arrannges in hierarchical structure which mimic the DOM structure of the app
//scopes can watch expressions and propagate events

//the angularJS $scope functions:
//$watch()
//$digest()
//$apply()

//these functions are some of the central functions in AngularJS. If you dont understand them, you dont really understand AngularJS.

//$scope.$watch  watches are created using this function. the framework is watching the variable for changes
//a watch means that angular is watching changes in the var on the $scope object

