const sumAndProd = (arr) => {
    let sum = 0
    let prod = 1
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        prod *= arr[i]
    }
    return `the sum of the elements in the array is ${sum} the product of the elements in the array is ${prod}`
}

//console.log(sumAndProd([1,2,3,4,5]))

module.exports = {sumAndProd}