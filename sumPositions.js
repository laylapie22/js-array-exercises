/**
 * 
 * There are two arrays with individual values, write a 
 * JavaScript program to compute the sum of each individual index value from the given arrays. 
 */
const sumPositions = (arr1,arr2) => {
    let counter = 0;
    let sum = 0
    const sumOfArrays = []

    while ( (counter < arr1.length) && (counter < arr2.length) ) {
        sum = arr1[counter] + arr2[counter]
        sumOfArrays.push(sum)
        counter++
        sum = 0;
    }

    if ( counter === arr1.length ) {
        for ( let i = counter; i < arr2.length; i++ ) {
            sumOfArrays.push(arr2[i])
        }
    } else {
        for ( let j = counter; j < arr1.length; j++ ) {
            sumOfArrays.push(arr1[j])
        }
    }
        return sumOfArrays
}

//console.log(sumPositions([1,2],[3,4,5,7]))

module.exports = {sumPositions}