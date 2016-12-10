angular.module('app')
//Chose a service because I was told angular 2.0 will only use them and factories essentially do the same thing
.service("getMedianService", function(){
  
  
  self.getCurrentMedian = function (arr) {
    // Temporary array to not overwrite the original
    var arrTemp = [];
    
    // Duplicate original array
    for (let a of arr) {
      arrTemp.push(a);
    }
    
    // If array length is 0 return null
    if (arrTemp.length === 0)
      return null;
      
    // sort the array
    // arrTemp.sort(function (a,b){return a - b});
    
    arrTemp.sort();
    
    // Find middle array index
    var mid = Math.floor(arrTemp.length / 2);
    
    if ((arrTemp.length % 2) == 1) // length odd
      return arrTemp[mid];
    else // length even
      return (arrTemp[mid - 1] + arrTemp[mid]) / 2;
  };
});