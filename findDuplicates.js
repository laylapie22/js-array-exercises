/**
 *  Write a JavaScript program to 
 * find duplicate values in 
 * a JavaScript array. 
 */
const findDuplicates = (arr) => {
    let uniques = []
    let duplicates = []
    arr.forEach( (el) => {
        
        if ( uniques.includes(el) && !duplicates.includes(el) ) {
            duplicates.push(el)
        } 
        if (!uniques.includes(el) ) {
            uniques.push(el)
        }
    })
    return `the duplicates are ${duplicates}`
}

module.exports = { findDuplicates }