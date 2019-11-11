/** Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.
 * Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
 * Sample Output : 
 * "row 0" 
 * " 1" 
 * " 2" 
 * " 1"
 * " 24"
 * "row 1" 
 */

 const printEl = (array) => {
     array.forEach( (arr, i) => {
        console.log("row ", i)
        arr.forEach( el => {
            console.log(el)
         })  
     })
     console.log("\n")
 }

 const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
 printEl(a)