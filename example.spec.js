describe("Example App Test Suite", function() {

    describe("Example Test Suite", function() {

        it("true will be truthy", function() {
            expect(true).toBeTruthy();
        });

    });

    describe("Example Service Test Suite", function() {

        beforeEach(function() {
            module('app');
        });

        it("will get Hello message when given a name", function() {
            inject(function(HelloWorld) {
                result = HelloWorld.generateHello("John");
                expect(result).toBe("Hello John");

            });
        });

        it("will throw an error string when given null", function() {
            inject(function(HelloWorld) {
                expect(function() {
                        HelloWorld.generateHello(null);
                    })
                    .toThrow("invalid parameter for who");

            });
        });

        it("will throw an error string when given empty string", function() {
            inject(function(HelloWorld) {
                expect(function() {
                        HelloWorld.generateHello("");
                    })
                    .toThrow("invalid parameter for who");

            });
        });

        it("will throw an error string when given blank string", function() {
            inject(function(HelloWorld) {
                expect(function() {
                        HelloWorld.generateHello("   ");
                    })
                    .toThrow("invalid parameter for who");

            });
        });

    });

});