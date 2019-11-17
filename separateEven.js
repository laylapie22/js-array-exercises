/**
 * Write a program which accept a number as input
 * and insert dashes (-) between each two 
 * even numbers. For example if you accept 025468 
 * the output should be 0-254-6-8.
 */
const evenElem = (num) => {
    const stringOfNum = num.toString()
    const result = [stringOfNum[0]]
     
    for ( let i = 1; i < stringOfNum.length; i++) {
        if ( (stringOfNum[i-1] % 2 === 0) && (stringOfNum[i] % 2 === 0) ){
            result.push("-", stringOfNum[i])
        } else {
            result.push(stringOfNum[i])
        }
    }
    return result.join('')
}

console.log(evenElem(124689))

module.exports = { evenElem }