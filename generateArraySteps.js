/** Write a JavaScript function to generate an array of specified length, 
 * filled with integer numbers, 
 * increase by one from starting position. */
const rangeBetween = (num1,num2) => {
    const arr = []
    for ( let i = num1; i <= num2; i++ ) {
        arr.push(i)
    }
    return arr
}

module.exports = { rangeBetween }