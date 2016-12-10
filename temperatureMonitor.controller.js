angular.module('app')
//Temperature monitor controller
.controller("TemperatureMonitorController", function(getMedianService) {
  // Chose to use an object because it seemed cleaner and more organized.
  var self = this;
  
  self.TemperatureMonitor = {
    // Not sure what the project means by "No coupling with the UI"
    temperaturesArrayMaxLength: 8,
    tempToAddToArray: '',
    temperaturesArray: [],
    medianToDisplay: '',
    
    // Put ngmodel the "tempToAddToArray" value into the "temperaturesArray" array
    recordTemperature: function(temperature) {
      if (this.temperaturesArray.length < this.temperaturesArrayMaxLength) {
        this.temperaturesArray.push(temperature);
      }
    },
    
    // Run the get current median service function to set the median to display
    getCurrentMedian: function() {
      return self.getCurrentMedian(this.temperaturesArray);
    }
  };
});