var angular = require('angular');
var app = angular.module('app', []);

app.directive('messageDirective', function() {
  return {
    restrict: 'E',
    scope: {
      name: '=',
      says: '='
    },
    replace: true,
    template: '<p> {{name}} shouts {{says}}!</p>'
  }
})

app.directive('coolDirective', function() {
  return {
    scope: {},
    restrict: 'E',
    replace: true,
    template: '<button>This is Cool</button>',
    link: function($scope, element, attributes) {
      element.on('click', function() {
        element.css('background-color', 'red')
      })
    }
  }
})

app.directive('navbarDirective', function() {
  return {
    restrict: 'A',
    link: function($scope, element, attributes) {
      element.on('click', function() {
        element.css('text-decoration', 'line-through')
      })
    }
  }
})

app.directive('haikuDirective', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/haiku.html'
  }
})

app.directive('transcludeDirective', function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      transcludeDirective: '='
    },
    template: '<br><p><ng-transclude></ng-transclude> {{transcludeDirective}} </p>'
  }
})
