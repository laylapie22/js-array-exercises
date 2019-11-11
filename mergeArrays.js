/**Write a JavaScript function 
 * to merge two arrays 
 * and removes all duplicates elements. */
const mergeArrays = (arr1,arr2) => {
    const mergedArr = []
    for ( let i = 0; i < arr1.length; i++ ) {
        mergedArr.push(arr1[i])
    }
    for ( let i = 0; i < arr2.length; i++ ) {
        mergedArr.push(arr2[i])
    }
    const set = new Set(mergedArr)

    return Array.from(set)
}

//console.log(mergeArrays([1,2,3],[1,2,3]))

module.exports = { mergeArrays }