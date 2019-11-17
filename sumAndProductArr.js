/** Write a JavaScript program to compute 
 * the sum and product of an array of integers. 
 * */
const sumAndProd = (arr) => {
    let sum = 0
    let prod = 1
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        prod *= arr[i]
    }
    return `the sum of the elements in the array is ${sum} the product of the elements in the array is ${prod}`
}

module.exports = {sumAndProd}