/**
 * 
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. 
 */
const firstElement = ( arr, n ) => {
    if ( !Array.isArray(arr) ) {
        return arr
    }
    return arr.slice(0,n)
}

//console.log(firstElement([1,2,3,4,5,6],3))
module.exports = { firstElement }