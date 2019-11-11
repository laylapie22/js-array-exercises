/**
 * Write a JavaScript function to remove a specific element from an array. 
 */
const removeSpecElem = (arr,el) => {
    const index = arr.indexOf(el)
    if ( index > -1 ) {
        arr.splice(index,1)
    }
    return arr
}

//console.log(removeSpecElem([1,2,4,5,3,6,7,8],3))
module.exports = {removeSpecElem}
