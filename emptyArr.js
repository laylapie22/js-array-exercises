/**Write a JavaScript script to 
 * empty an array keeping the original size. 
 */
const emptyArr = (arr) => {
    console.log(arr)
    arr.length = 0
    console.log(arr)
}

emptyArr([1,2,3,4])