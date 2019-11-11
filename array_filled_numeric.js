/**
 * Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
 *  Test Data :
 *  console.log(array_filled(6, 0));  
 *  [0, 0, 0, 0, 0, 0]
    console.log(array_filled(4, 11));
    [11, 11, 11, 11]
 *  
 * 
 * 
 */
const numFilledArr = (num,value) => {
    const arr = []
    for ( let i = 0; i < num; i++ ) {
        arr.push(value)
    }
    return arr
}
//console.log(numFilledArr(3,6))
module.exports = { numFilledArr }
