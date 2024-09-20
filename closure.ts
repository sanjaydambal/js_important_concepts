function createCalculator() {
    let currentValue = 0;

    return {
        add: (value: number) => {
            currentValue += value;
            return calculator; 
        },
        subtract: (value: number) => {
            currentValue -= value;
            return calculator; 
        },
        multiply: (value: number) => {
            currentValue *= value;
            return calculator; 
        },
        divide: (value: number) => {
            if (value === 0) {
                throw new Error("Cannot divide by zero");
            }
            currentValue /= value;
            return calculator; 
        },
        reset: () => {
            currentValue = 0;
            return calculator; 
        },
        getResult: () => {
            return currentValue;
        },
    };
}


const calculator = createCalculator();
const result = calculator.add(10).subtract(5).multiply(2).divide(3).getResult();
console.log(`Final result is: ${result}`); 
