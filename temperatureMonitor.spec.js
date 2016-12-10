describe("App Test Suite", function() {

  describe("Temperature Monitor Service Test Suite", function() {

    beforeEach(function() {
        module('app');
    });
    
    it("will take in an empty array and return null", function() {
      inject(function(getMedianService) {
          var actual = [];
          result = getMedianService.getCurrentMedian(actual);
          expect(result).toBe(null);
      });
      
    });
    
    it("will take in an array [5,3,4] and return 4 as the median", function() {
      inject(function(getMedianService) {
          var actual = [5,3,4];
          result = getMedianService.getCurrentMedian(actual);
          expect(result).toBe(4);
      });
      
    });
    
    it("will take in an array [5,4,2,3] and return 3.5 as the median", function() {
      inject(function(getMedianService) {
          var actual = [5,4,2,3];
          result = getMedianService.getCurrentMedian(actual);
          expect(result).toBe(3.5);
      });
      
    });
    
    it("will take in an array [3,4,1,-8.4,7.2,4,1,1.2] and return 2.1 as the median", function() {
      inject(function(getMedianService) {
          var actual = [3,4,1,-8.4,7.2,4,1,1.2];
          result = getMedianService.getCurrentMedian(actual);
          expect(result).toBe(2.1);
      });
      
    });
    
  });
  
});