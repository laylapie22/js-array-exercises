/**Write a JavaScript function to 
 * get the last element of an array. 
 * Passing a parameter 'n' will return 
 * the last 'n' elements of the array. 
 * Test Data :
 * console.log(last([7, 9, 0, -2]));
 * console.log(last([7, 9, 0, -2],3));
 * console.log(last([7, 9, 0, -2],6));
 * Expected Output : 
 * -2 
 * [9, 0, -2] 
 * [7, 9, 0, -2]
 *  */
const lastElem = (arr,n) => {
    const last = arr.length - 1
    if ( n === null ) {
        return arr[last]
    }
    return arr.slice(arr.length-n, arr.length)
}
//console.log(lastElem([7,8,9],2))

module.exports = {lastElem}