/** Write a JavaScript program to find the most frequent item of an array.
 * Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Sample Output : a ( 5 times ) 
 */

const mostFreq = ( arr ) => {
    let item; 
    let defFreq = 1; 
    let counter = 0; 

    for ( let i = 0; i < arr.length; i++ ) { 
        for ( let j = 0; j < arr.length; j++ ) {
            if ( arr[i] === arr[j] ) {
                counter++
            }
            if ( defFreq < counter ) {
                defFreq = counter
                item = arr[i]
            }
        }
        counter = 0; 
    }
    return `${item} (${defFreq} times)`
}

module.exports = {mostFreq}