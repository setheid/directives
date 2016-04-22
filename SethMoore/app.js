'use strict';

let app = angular.module('app', []);

app.directive('coffeeApp', () => {
  return {
    restrict: 'A',
    controller: ($scope) => {
      $scope.loggedin = false;
      $scope.login = () => $scope.loggedin = !$scope.loggedin;
      $scope.coffees = [];
    }
  }
});

app.directive('loginForm', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      login: '&',
      loggedin: '='
    },
    templateUrl: 'templates/login.html',
    controller: ($scope) => {

    }
  }
});

app.directive('overview', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loggedin: '=',
      coffees: '='
    },
    templateUrl: 'templates/overview.html',
    controller: ($scope) => {

    }
  }
});

app.directive('notes', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      loggedin: '=',
      coffees: '='
    },
    templateUrl: 'templates/notes.html',
    controller: ($scope) => {
      $scope.coffee = {};
      $scope.coffee.stars = 0;
      $scope.addReview = function(coffees, coffee) {
        var newCoffee = coffee;
        $scope.coffee = {};
        $scope.coffee.stars = 0;
        coffees.push(newCoffee);
      }
    }
  }
});

app.directive('stars', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      coffee: '='
    },
    templateUrl: 'templates/stars.html',
    link: function($scope, element, attrs) {
      element.find('i').bind("click", function(e){
        var num = $(this).index() + 1;
        $scope.$apply(function() {
          $scope.coffee.stars = num;
        });
      });
    }
  }
});
