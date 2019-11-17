/** Write a JavaScript program to flatten a nested (any depth) array. 
*   the array will 
*   be flattened until the last level.
*/
const flatten = (arr) => {
    const destination = []
    flattenArr(arr,destination)
    return destination
}
const flattenArr = (arr,destination) => {
    arr.forEach( el => {
    if ( Array.isArray(el) ) {
        flattenArr(el,destination)
    } else {
        destination.push(el)
    }
    })
    return destination
}

module.exports = {flatten}