angular.module('app')

//Directive holding an HTML template for the temperature monitor
.directive('temperatureMonitorDirective', function() {
  return {
    templateUrl:'temperature_monitor.tpl.html',
    controller:'TemperatureMonitorController',
    controllerAs:'tMCtrl'
  };
});