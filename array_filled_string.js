/** 
 * Write a JavaScript function to create a 
 * specified number of elements with pre-filled string value array.  
 */
const stringFilledArr = (num,value) => {
    const arr = Array(length).fill(value)
    
    return arr
}

module.exports = { stringFilledArr }