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

//console.log(swapCase("Hello i am layla"))

module.exports = { swapCase }