/**
 * Write a JavaScript function to find the difference of two arrays.
 * Test Data :
 * console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
 * ["3", "10", "100"]
 * console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
 * ["6"]
 * console.log(difference([1, 2, 3], [100, 2, 1, 10]));
 * ["3", "10", "100"] 
 */

const findDiff = (arr1,arr2) => {
    const unique = []
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);

    arr1.forEach( (el,i) => {
        if ( arr2.indexOf(arr1[i]) < 0 ) {
            unique.push(el)
        }
    })

    arr2.forEach( (el,i) => {
        if ( arr1.indexOf(arr2[i]) < 0 ) {
            unique.push(el)
        }
    })
    

    return unique.sort((a,b) => a-b);
}

module.exports = { findDiff }
