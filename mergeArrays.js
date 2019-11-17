/**
 * Write a JavaScript function 
 * to merge two arrays 
 * and removes all duplicates elements. 
 * */
const mergeArrays = (arr1,arr2) => {
    const mergedArr = []

    arr1.forEach( el => {
        mergeArrays.push(el)
    })
    
    arr2.forEach( el => {
        mergeArrays.push(el)
    })
    const set = new Set(mergedArr)

    return Array.from(set)
}

module.exports = { mergeArrays }