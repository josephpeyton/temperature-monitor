angular.module('app')
.service("HelloWorld", function(){
    
    this.generateHello = function (who) {
        if( who && who.trim() ) {
            return "Hello " + who;
        }
        throw "invalid parameter for who";
    }
})