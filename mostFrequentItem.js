/**Write a JavaScript program to find the most frequent item of an array.
 * Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Sample Output : a ( 5 times ) 
 */

const mostFreq = ( arr ) => {
    let item; //item with the highest num of frequency
    let defFreq = 1; //default number of occurence for for the element
    let counter = 0; //current counter for that element

    for ( let i = 0; i < arr.length; i++ ) { //
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

//console.log(mostFreq([1,2,3,4,4,4,4]))

module.exports = {mostFreq}