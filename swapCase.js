/** Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' 
 * the output should be 
 * 'tHE qUICK bROWN fOX'. 
 * */
const swapCase = (str) => {
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const LOWER = 'abcdefghijklmnopqrstuvwxyz'
    let result = []

    for ( let i = 0; i < str.length; i++ ) {
        if (UPPER.includes(str[i])) {
            result.push(str[i].toLowerCase())
        } else if ( LOWER.includes(str[i]) ) {
            result.push(str[i].toUpperCase())
        } else {
            result.push(str[i])
        }
    }
    return result.join('')
}

module.exports = { swapCase }