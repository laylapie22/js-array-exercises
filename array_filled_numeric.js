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
const numFilledArr = (length,value) => {
    const arr = Array(length).fill(value)
    
    return arr
}

module.exports = { numFilledArr }
