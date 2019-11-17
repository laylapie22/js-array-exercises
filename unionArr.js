/** Write a JavaScript program to compute 
 * the union of two arrays 
 * */
const unionArr = (arr1,arr2) => {
    let union = []
    arr1.forEach( el => {
        union.push(el)
    })
    arr2.forEach( el => {
        union.push(el)
    })
    const set = new Set(union)
    return Array.from(set)
}

module.exports = { unionArr }