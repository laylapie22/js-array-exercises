/** Write a JavaScript function to get nth largest element from an unsorted array. */
const getNthLargest = (arr,n) => {
    const sortedArr = arr.sort( (a,b) => {
        return b - a
    })
    return sortedArr[n-1]
}

module.exports = { getNthLargest }