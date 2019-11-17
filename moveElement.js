/** Write a JavaScript function to move an 
 * array element from one position to another.
*/

const moveElement = (arr, idx1,idx2) => {
    const valueIdx1 = arr[idx1]
    const valueIdx2 = arr[idx2]

    arr[idx1] = valueIdx2
    arr[idx2] = valueIdx1

    return arr
}

module.exports = { moveElement }