/** 
 * Write a JavaScript function to remove a 
 * specific element from an array. 
 */
const removeSpecElem = (arr,el) => {
    const index = arr.indexOf(el)
    if ( index > -1 ) {
        arr.splice(index,1)
    }
    return arr
}

module.exports = {removeSpecElem}
