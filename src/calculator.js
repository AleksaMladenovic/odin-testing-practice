export const Calculator = {
  add(num1, num2) {
    if (num1 === undefined || num2 === undefined)
      throw new Error("Two operators need to be defined");
    if(typeof num1 !=='number'||typeof num2 !== 'number')
        throw new Error("Operators must be numbers");
    return num1+num2;
  },
  subtract(num1, num2) {
    if (num1 === undefined || num2 === undefined)
      throw new Error("Two operators need to be defined");
    if(typeof num1 !=='number'||typeof num2 !== 'number')
        throw new Error("Operators must be numbers");
    return num1-num2;
  },
  divide(num1, num2) {
    if (num1 === undefined || num2 === undefined)
      throw new Error("Two operators need to be defined");
    if(typeof num1 !=='number'||typeof num2 !== 'number')
        throw new Error("Operators must be numbers");
    if(num2===0)
        throw new Error("Cannot divide by zero");
    return num1/num2;
  },
  multiply(num1, num2) {
    if (num1 === undefined || num2 === undefined)
      throw new Error("Two operators need to be defined");
    if(typeof num1 !=='number'||typeof num2 !== 'number')
        throw new Error("Operators must be numbers");
    return num1*num2;
  },
};
