import {analyzeArray} from "./analyzeArray.js"

test("Function is defined",()=>{
    expect(analyzeArray).toBeDefined();
})

test("Throws error when function argument is not an array",()=>{
    expect(()=>analyzeArray()).toThrow("analyzeArray argument must be an array");
    expect(()=>analyzeArray(null)).toThrow("analyzeArray argument must be an array");
    expect(()=>analyzeArray(1)).toThrow("analyzeArray argument must be an array");
    expect(()=>analyzeArray("s")).toThrow("analyzeArray argument must be an array");
    expect(()=>analyzeArray({array: [1,3,3]})).toThrow("analyzeArray argument must be an array");
})

test("For empty array return object just with length:0",()=>{
    expect(analyzeArray([])).toEqual({avg:undefined, min:undefined, max:undefined, length:0});
})

test("Throws an error if the array contains non-numeric values.",()=>{
    expect(()=>analyzeArray(['char',1,3,4,1,'sdsf'])).toThrow("The array must contain only numbers.");
    expect(()=>analyzeArray([1,{},3,4,1,])).toThrow("The array must contain only numbers.");
})

test("Returns same number for average, min and max when array contains only one number",()=>{
    expect(analyzeArray([3])).toEqual({avg:3, min:3,max:3, length:1});
    expect(analyzeArray([-231.23])).toEqual({avg:-231.23, min:-231.23,max:-231.23, length:1});
})

test("Works with positive integers",()=>{
    const analyze = analyzeArray([3,5,12,4,12,41,5,12,4,5]);
    expect(analyze.min).toBe(3);
    expect(analyze.max).toBe(41);
    expect(analyze.length).toBe(10);
    expect(analyze.avg).toBeCloseTo(10.3);

})

test("Works with negative and positive integers",()=>{
    const analyze = analyzeArray([-3,-5,-12,4,-12,41,5,-12,4,5,5]);
    expect(analyze.min).toBe(-12);
    expect(analyze.max).toBe(41);
    expect(analyze.length).toBe(11);
    expect(analyze.avg).toBeCloseTo(1.818181818);
})

test("Works with decimal numbers",()=>{
    const analyze = analyzeArray([-3.3,-5.6,-12.51,4.512,-12.785,41.123,5.6,-12.23,4.7,5.5,5.1]);
    expect(analyze.min).toBe(-12.785);
    expect(analyze.max).toBe(41.123);
    expect(analyze.length).toBe(11);
    expect(analyze.avg).toBeCloseTo(1.828181818);
})