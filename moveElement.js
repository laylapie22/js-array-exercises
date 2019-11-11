/**
* Write a JavaScript function to move an array element from one position to another.
*/

const moveElement = (arr, idx1,idx2) => {
    for( let i = 0; i < arr.length; i++ ) {
        const idx_1 = idx1
        const idx_2 = idx2

        const valueIdx1 = arr[idx_1]
        const valueIdx2 = arr[idx_2]

        arr[idx_1] = valueIdx2
        arr[idx_2] = valueIdx1
    }
    return arr
}

//console.log(moveElement([1,2,3,4,5],0,2))
module.exports = { moveElement }