function createCalculator() {
    var currentValue = 0;
    return {
        add: function (value) {
            currentValue += value;
            return calculator;
        },
        subtract: function (value) {
            currentValue -= value;
            return calculator;
        },
        multiply: function (value) {
            currentValue *= value;
            return calculator;
        },
        divide: function (value) {
            if (value === 0) {
                throw new Error("Cannot divide by zero");
            }
            currentValue /= value;
            return calculator;
        },
        reset: function () {
            currentValue = 0;
            return calculator;
        },
        getResult: function () {
            return currentValue;
        },
    };
}
var calculator = createCalculator();
var result = calculator.add(10).subtract(5).multiply(2).divide(3).getResult();
console.log("Final result is: ".concat(result));
