export function caesarCipher(str, num){
    if(typeof str !== 'string')
        throw new Error("First argument of caesarCipher need to be a string");
    if(!Number.isInteger(num))
        throw new Error("Seccond argument of caesarCipher need to be a integer");
    // if(num===0)
    //     return str;
    num = num%26;
    let newStr = ''; 
    str.split('').forEach(char =>{
        let charCode = char.codePointAt(0)+num;
        let newChar = String.fromCharCode(charCode);

        if(char>='a'&&char<='z'){
            if(newChar<'a')
                charCode+=26;
            if(newChar>'z')
                charCode-=26;
        }else if(char>='A'&&char<='Z'){
            if(newChar<'A')
                charCode+=26;
            if(newChar>'Z')
                charCode-=26;
        }else{
            charCode-=num;
        }

        newChar = String.fromCharCode(charCode);
        newStr+=newChar;
    });
    return newStr;
}

caesarCipher("aleskafsaflzsdaffag",3)