import {reverseString} from "./reverseString.js"

test('Is defined', ()=>{
    expect(reverseString).toBeDefined();
})

test('Return null when input is undefined', ()=>{
    expect(reverseString(undefined)).toBeNull();
})

test('Return null when input is not a string',()=>{
    expect(reverseString(null)).toBeNull();
})

test('Return null when input is not string',()=>{
    expect(reverseString(1234)).toBeNull();
    expect(reverseString(31.23)).toBeNull();
    expect(reverseString({string:"ssds"})).toBeNull();
})

test('Return the same string when length of it is 1',()=>{
    expect(reverseString('1')).toBe('1');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('b')).toBe('b');
})

test('Return swapped chars when the input length is 2',()=>{
    expect(reverseString('ab')).toBe('ba');
    expect(reverseString('21')).toBe('12');
})

test('Return reversed string when the input length is bigger than 2',()=>{
    expect(reverseString('abcdef')).toBe('fedcba');
})

test('Return reversed string when input has blank inside',()=>{
    expect(reverseString('aleksa is a king')).toBe('gnik a si askela');
})