const getNthLargest = (arr,n) => {
    const sortedArr = arr.sort( (a,b) => {
        return b - a
    })
    return sortedArr[n-1]
}
//console.log(getNthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4))

module.exports = { getNthLargest }