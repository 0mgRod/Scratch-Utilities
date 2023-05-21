(function (ext) {

    // Extension initialization
    ext._shutdown = function () {};

    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' }; // Return status: 2 for "Ready"
    };

    /* REPORTER block */
    ext.returnPi = function (callback) {
        callback(3.14159265358);
    };

    /* BOOLEAN block */
    ext.isEven = function (num) {
        // This block checks if a number is even and returns a boolean
        return num % 2 === 0;
    };
    
    /* BOOLEAN block */
    ext.isEven = function (num) {
        // This block checks if a number is even and returns a boolean
        return num % 2 !== 0;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'Pi', 'returnPi'],
            ['b', '%n is even?', 'isEven', 10],
            ['b', '%n is odd?', 'isOdd', 10]
        ],
    };

    // Register the extension
    ScratchExtensions.register('My Extension', descriptor, ext);

})(window);
