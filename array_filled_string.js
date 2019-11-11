/**
 * Write a JavaScript function to create a 
 * specified number of elements with pre-filled string value array.  
 */
const stringFilledArr = (num,value) => {
    let arr = []
    for ( let i = 0; i < num; i++ ) {
        arr.push(value)
    }
    return arr
}

module.exports = { stringFilledArr }