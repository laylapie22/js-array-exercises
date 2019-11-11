const sortArr = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length - 1; j++ ) {
            if ( arr[j] > arr[j+1] ) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

/**
 * another alternative using array.sort
 */
// const sortArr = (arr) => {
//     return arr.sort( (a,b) => a - b)
// }

console.log(sortArr([3,2,6,5,7,5]))