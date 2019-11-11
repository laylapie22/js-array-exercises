 /**Write a JavaScript program to 
  * remove duplicate items from an array 
*/
const remDuplicate = (arr) => {
    // const tempArr = []
    // arr.forEach( el => {
    //     if ( tempArr.indexOf(el) < 0 ) {
    //         tempArr.push(el)
    //     } 
    // })
    // return tempArr
    const set = new Set(arr)
    return Array.from(set)
}

//console.log(remDuplicate([1,2,2,3,4]))

module.exports = {remDuplicate}
