/**
 *
 *  This program will return 
 * a random value from the array inputed
 */
const randomIdxGen = (max) => {
    return Math.floor(Math.random() * max)
}

const randomValue = (arr) => {
    let randomVal = 0
    for ( let i = 0; i < arr.length; i++ ) {
        const randomIndex = randomIdxGen(arr.length)
        
        randomVal = arr[randomIndex]
    }
    return randomVal
}
//console.log(randomValue([1,2,3,4,5,6,7]))
module.exports = { randomValue, randomIdxGen }