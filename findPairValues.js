/**
 * Write a JavaScript program to find a pair of 
 * elements (indices of the two numbers) from 
 * an given array whose sum equals a specific target number. 
 * 
 * */ 
const findPairValues = (arr, target) => {
    for ( let i = 0; i < arr.length; i++ ) {
        let first = arr[i]
        for ( let j = i + 1; j < arr.length; j++ ) {
            let second = arr[j]
            if ( (first + second) === target ) {
                return `${first},${second}`
            }
        }
    } 
}

module.exports = { findPairValues }