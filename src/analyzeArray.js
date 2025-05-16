export function analyzeArray(array){
    if(!Array.isArray(array))
        throw new Error("analyzeArray argument must be an array.");
    if(array.length===0)
        return {length:0}
    array.forEach(element => {
        if(typeof element !== 'number')
            throw new Error('The array must contain only numbers.');
    });

    const sum = array.reduce((prev,cur)=>cur+prev,0);
    const avg = sum/array.length;
    const min = array.reduce((prev,cur)=>cur<prev ? cur:prev);
    const max = array.reduce((prev,cur)=>cur>prev ? cur:prev);
    const length = array.length;

    return {avg,min,max,length};
}