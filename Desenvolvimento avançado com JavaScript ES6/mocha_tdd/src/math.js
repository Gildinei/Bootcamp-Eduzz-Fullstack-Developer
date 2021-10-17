class Math {
    sum(numberOne, numberTwo, callback) {
        setTimeout(() => {
            callback(numberOne + numberTwo);
        }, 2500);
    };
};

module.exports = Math;