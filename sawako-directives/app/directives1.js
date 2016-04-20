(function(){
  var angular = require('angular');
  var app = angular.module('myApp');

  app.controller('myController',function(){
    this.lastName = 'Smith';
    this.firstName = 'Sara';
  });

  app.directive('myNavBar',function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/navbar.html'
    };
  });

  app.directive('storyToTell', function(){
    return {
      restrict: 'EA',
      scope: {
        firstName: '='
      },
      templateUrl: 'templates/story.html',
      controller: 'myController',
      controllerAs: 'mine'
    };
  });

  app.directive('dogCustomDirective', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        name: '=',
        age: '=',
        hobby: '='
      },
      templateUrl: 'templates/dog.html'
    };
  });

// link is on the outer most element
  app.directive('clickable', function(){
    return {
      scope: {},
      restrict: 'E',
      template: '<button>click me several times!</button><p>I am turning my color!!</p><p>Me too!!</p>',
      link: function(scope, element, attrs){
        element.on('click', function(){
          element.css(
            {
              'color': 'red',
              'background-color': 'blue'
            });
        });
      }
    };
  });

  app.directive('takeFormData', function(){
    return {
      restrict: 'A',
      scope: {
        value: '=ngModel'
      },
      templateUrl: 'templates/form-data.html'
    };
  });

})();
