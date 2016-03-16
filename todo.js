angular.module('todoApp').controller('TodoListController', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.newTodo.done = false;
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = '';
  }

  $scope.deleteTodo = function(index) {
    $scope.todos.splice(index);
  }
  
  $scope.getRemaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      if(!todo.done) {
        count++;
      }
    });
    return count;
  }
});