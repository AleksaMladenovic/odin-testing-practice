import { Calculator } from "./calculator.js";
const functions = [
  { name: "Calculator.add", func: Calculator.add },
  { name: "Calculator.subtract", func: Calculator.subtract },
  { name: "Calculator.divide", func: Calculator.divide },
  { name: "Calculator.multiply", func: Calculator.multiply },
];

test("Calculator is defined", () => {
  expect(Calculator).toBeDefined();
});

functions.forEach(funcObj => {
    test(`${funcObj.name} function is defined`,()=>{
        expect(funcObj.func).toBeDefined();
    })
});

functions.forEach(funcObj => {
    test(`${funcObj.name} throws an error when arguments are undefined`,()=>{
        expect(()=> funcObj.func(undefined,undefined)).toThrow("Two operators need to be defined");
        expect(()=> funcObj.func(1,undefined)).toThrow("Two operators need to be defined");
        expect(()=> funcObj.func(undefined)).toThrow("Two operators need to be defined");
        expect(()=> funcObj.func()).toThrow("Two operators need to be defined");
    })
})

functions.forEach(funcObj =>{
    test(`${funcObj.name} throws an error when arguments are not numbers`,()=>{
        expect(()=>funcObj.func(1,'a')).toThrow("Operators must be numbers");
        expect(()=>funcObj.func(null,1)).toThrow("Operators must be numbers");
        expect(()=>funcObj.func(null,null)).toThrow("Operators must be numbers");
        expect(()=>funcObj.func(231.12, {num:123})).toThrow("Operators must be numbers");
        expect(()=>funcObj.func('2', 1)).toThrow("Operators must be numbers");
    })
})

test("Calculator.add returns sum of two positive integer operators", ()=>{
    expect(Calculator.add(1,2)).toBe(3);
    expect(Calculator.add(0,0)).toBe(0);
    expect(Calculator.add(555,444)).toBe(999);
    expect(Calculator.add(12,14)).toBe(26);
})

test("Calculator.add returns sum of two negative integer operators", ()=>{
    expect(Calculator.add(-1,-2)).toBe(-3);
    expect(Calculator.add(-555,-444)).toBe(-999);
    expect(Calculator.add(-0,-0)).toBe(-0);
    expect(Calculator.add(-12,-14)).toBe(-26);
})

test("Calculator.add returns sum of combination of negative and positive integer operators", ()=>{
    expect(Calculator.add(-0,0)).toBe(0);
    expect(Calculator.add(1,-2)).toBe(-1);
    expect(Calculator.add(555,-444)).toBe(111);
    expect(Calculator.add(12,-14)).toBe(-2);
})

test("Calculator.add returns sum of two decimal numbers",()=>{
    expect(Calculator.add(-0.3,0.2)).toBeCloseTo(-0.1);
    expect(Calculator.add(0.3,0.2)).toBeCloseTo(0.5);
    expect(Calculator.add(-13.3,2.2)).toBeCloseTo(-11.1);
    expect(Calculator.add(544.13,514.2)).toBeCloseTo(1058.33);
})
test("Calculator.subtract returns diference of two positive integer operators", ()=>{
    expect(Calculator.subtract(1,2)).toBe(-1);
    expect(Calculator.subtract(0,0)).toBe(0);
    expect(Calculator.subtract(555,444)).toBe(111);
    expect(Calculator.subtract(12,14)).toBe(-2);
})

test("Calculator.subtract returns diference of two negative integer operators", ()=>{
    expect(Calculator.subtract(-1,-2)).toBe(1);
    expect(Calculator.subtract(-555,-444)).toBe(-111);
    expect(Calculator.subtract(-0,-0)).toBe(0);
    expect(Calculator.subtract(-12,-14)).toBe(2);    expect(Calculator.multiply(-0,0)).toBe(-0);
})

test("Calculator.subtract returns diferenceof combination of negative and positive integer operators", ()=>{
    expect(Calculator.subtract(-0,0)).toBe(-0);
    expect(Calculator.subtract(1,-2)).toBe(3);
    expect(Calculator.subtract(555,-444)).toBe(999);
    expect(Calculator.subtract(12,-14)).toBe(26);
})

test("Calculator.subtract returns diference of two decimal numbers",()=>{
    expect(Calculator.subtract(-0.3,0.2)).toBeCloseTo(-0.5);
    expect(Calculator.subtract(0.3,0.2)).toBeCloseTo(0.1);
    expect(Calculator.subtract(-13.3,2.2)).toBeCloseTo(-15.5);
    expect(Calculator.subtract(544.13,514.2)).toBeCloseTo(29.93);
})

test("Calculator.divide trows an Error when divide with zero",()=>{
    expect(()=>Calculator.divide(1,0).toThrow("cannot divide by zero"));
    expect(()=>Calculator.divide(0,0).toThrow("cannot divide by zero"));
    expect(()=>Calculator.divide(-231.231,0).toThrow("cannot divide by zero"));
    expect(()=>Calculator.divide(232.231,0).toThrow("cannot divide by zero"));
})

test("Calculator.divide return quotient of two positive integer operators", ()=>{
    expect(Calculator.divide(4,2)).toBe(2);
    expect(Calculator.divide(1,2)).toBeCloseTo(0.5);
    expect(Calculator.divide(555,444)).toBeCloseTo(1.25);
    expect(Calculator.divide(12,14)).toBeCloseTo(0.857142857);
})

test("Calculator.divide return quotient of two negative integer operators", ()=>{
    expect(Calculator.divide(-1,-2)).toBeCloseTo(0.5);
    expect(Calculator.divide(-555,-444)).toBeCloseTo(1.25);
    expect(Calculator.divide(-12,-14)).toBeCloseTo(0.857142857);
})

test("Calculator.divide return quotient of combination of negative and positive integer operators", ()=>{
    expect(Calculator.divide(1,-2)).toBeCloseTo(-0.5);
    expect(Calculator.divide(555,-444)).toBeCloseTo(-1.25);
    expect(Calculator.divide(12,-14)).toBeCloseTo(-0.857142857);
})

test("Calculator.divide return quotient of two decimal numbers",()=>{
    expect(Calculator.divide(-0.3,0.2)).toBeCloseTo(-1.5);
    expect(Calculator.divide(0.3,0.2)).toBeCloseTo(1.5);
    expect(Calculator.divide(-13.3,2.2)).toBeCloseTo(-6.045454545);
    expect(Calculator.divide(544.13,514.2)).toBeCloseTo(1.058206923);
})

test("Calculator.multiply return product of two positive integer operators", ()=>{
    expect(Calculator.multiply(4,2)).toBe(8);
    expect(Calculator.multiply(1,2)).toBe(2);
    expect(Calculator.multiply(555,444)).toBe(246420);
    expect(Calculator.multiply(12,14)).toBe(168);
})

test("Calculator.multiply return product of two negative integer operators", ()=>{
    expect(Calculator.multiply(-1,-2)).toBe(2);
    expect(Calculator.multiply(-555,-444)).toBe(246420);
    expect(Calculator.multiply(-12,-14)).toBe(168);
})

test("Calculator.multiply return product of combination of negative and positive integer operators", ()=>{
    expect(Calculator.multiply(1,-2)).toBe(-2);
    expect(Calculator.multiply(555,-444)).toBe(-246420);
    expect(Calculator.multiply(12,-14)).toBe(-168);
})

test("Calculator.multiply return product of two decimal numbers",()=>{
    expect(Calculator.multiply(-0.3,0.2)).toBeCloseTo(-0.06);
    expect(Calculator.multiply(0.3,0.2)).toBeCloseTo(0.06);
    expect(Calculator.multiply(-13.3,2.2)).toBeCloseTo(-29.26);
    expect(Calculator.multiply(544.13,514.2)).toBeCloseTo(279791.646);
})

test("Calculator.multiply return 0 when some of operators are 0",()=>{
    expect(Calculator.multiply(0,512)).toBe(0);
    expect(Calculator.multiply(24,0)).toBe(0);
    expect(Calculator.multiply(-0,2.2)).toBe(-0);
    expect(Calculator.multiply(-0,0)).toBe(-0);
    expect(Calculator.multiply(0,0)).toBe(0);
})