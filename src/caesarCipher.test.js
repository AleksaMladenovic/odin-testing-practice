import { caesarCipher } from "./caesarCipher";

test('caesarCipher is defined', ()=>{
    expect(caesarCipher).toBeDefined();
})

test('caesarCipher first argument need to be a string', ()=>{
    expect(()=>caesarCipher()).toThrow("First argument of caesarCipher need to be a string");
    expect(()=>caesarCipher(1,2)).toThrow("First argument of caesarCipher need to be a string");
    expect(()=>caesarCipher(null)).toThrow("First argument of caesarCipher need to be a string");
    expect(()=>caesarCipher(undefined,3)).toThrow("First argument of caesarCipher need to be a string");
})

test('caesarCipher seccond argument need to be a integer', ()=>{
    expect(()=>caesarCipher("string")).toThrow("Seccond argument of caesarCipher need to be a integer");
    expect(()=>caesarCipher("string",null)).toThrow("Seccond argument of caesarCipher need to be a integer");
    expect(()=>caesarCipher("dsar","sda")).toThrow("Seccond argument of caesarCipher need to be a integer");
    expect(()=>caesarCipher("ds",3.312)).toThrow("Seccond argument of caesarCipher need to be a integer");
    expect(()=>caesarCipher("ds",-3.123)).toThrow("Seccond argument of caesarCipher need to be a integer");
})

test("if string does not contain letters return same string",()=>{
    expect(caesarCipher("231!32'123",3)).toBe("231!32'123");
})

test("if num is 0 return same string",()=>{
    expect(caesarCipher("aleska13fsal",0)).toBe("aleska13fsal");
})

test("works with just small letters",()=>{
    expect(caesarCipher("aleskafsaflzsdaffag",3)).toBe("dohvndivdiocvgdiidj");
})

test("works with just big letters",()=>{
    expect(caesarCipher("ASDFKAJFKLAJFSIIIRQQZPTINVZBVHAGQT",3)).toBe("DVGINDMINODMIVLLLUTTCSWLQYCEYKDJTW");
})

test("works combined with small and big letters",()=>{
    expect(caesarCipher("sdjkkaASJKFDJALKWSssaSQfsjqWIsksfzmfZsfkjas",6)).toBe("yjpqqgGYPQLJPGRQCYyygYWlypwCOyqylfslFylqpgy");
})

test("works combined with spaces",()=>{
    expect(caesarCipher("sdjkkaASJ KFDJA LKWSssaSQfsjqWI sksfzmfZsfkjas",6)).toBe("yjpqqgGYP QLJPG RQCYyygYWlypwCO yqylfslFylqpgy");
})

test("works combined with cpecial characters and letters",()=>{
    expect(caesarCipher("sd;lak{P{Q}@R_ZFD[';s la;lpkqosfnnxcm,ASds kjnf sfkJSF()@!#sfds9jkfj",6)).toBe("yj;rgq{V{W}@X_FLJ[';y rg;rvqwuylttdis,GYjy qptl ylqPYL()@!#yljy9pqlp");
})

test("works with negative number",()=>{
    expect(caesarCipher("sdjkkaASJ KFDJA LKWSssaSQfsjqWI sksfzmfZsfkjas",-6)).toBe("mxdeeuUMD EZXDU FEQMmmuMKzmdkQC memztgzTmzedum");
})

test("works with number biger than 26",()=>{
    expect(caesarCipher("sdjkkaASJ KFDJA LKWSssaSQfsjqWI sksfzmfZsfkjas",527)).toBe("zkqrrhHZQ RMKQH SRDZzzhZXmzqxDP zrzmgtmGzmrqhz");
})

test("works with number smaller than -26",()=>{
    expect(caesarCipher("sdjkkaASJ KFDJA LKWSssaSQfsjqWI sksfzmfZsfkjas",-125)).toBe("xioppfFXO PKIOF QPBXxxfXVkxovBN xpxkerkExkpofx");
})