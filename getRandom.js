/** 
 * Write a program that will return 
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

module.exports = { randomValue, randomIdxGen }