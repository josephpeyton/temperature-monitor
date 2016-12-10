angular.module('app')
//Directive holding an HTML template for the footer
.directive('footerDirective', function() {
  return {
    templateUrl:'footer.tpl.html',
  }
});
