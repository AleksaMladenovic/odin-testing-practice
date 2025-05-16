import { capitalize } from "./capitalize";

test('Is defined',()=>{
    expect(capitalize).toBeDefined();
})

test('Return null when input is undefined',()=>{
    expect(capitalize(undefined)).toBeNull();
})

test('Return null when input is null',()=>{
    expect(capitalize(null)).toBeNull();
})

test('Return empty string when input is empty string',()=>{
    expect(capitalize('')).toBe('');
})

test('Return null when input is not a string',()=>{
    expect(capitalize(123)).toBeNull();
})

test('Return same string when input is capitalized',()=>{
    expect(capitalize('Aleksa')).toBe('Aleksa');
})

 
test('Return same string when first char is not a letter',()=>{
    expect(capitalize('1leksa')).toBe('1leksa');
    expect(capitalize('1')).toBe('1');
    expect(capitalize(' a')).toBe(' a');
})

test('Return capitalized string for not capitalized input',()=>{
    expect(capitalize('aLEKsa iS KInG123')).toBe('ALEKsa iS KInG123');
    expect(capitalize('a')).toBe('A');
})