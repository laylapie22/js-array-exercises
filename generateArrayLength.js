/**
 * Write a JavaScript function to generate an array of specified length, 
 * filled with integer numbers, increase by one from starting position.
 */

 const array_range = (n1,n2 = 1) => {
    const arr = []
    for ( let i = 0; i < n2; i++ ) {
        arr.push(n1++)
    }
     return arr
 }

 module.exports = {array_range}