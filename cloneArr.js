/**
 * Write a JavaScript function to clone an array. 
 */
const cloneArr = (arr) => {
    const arrCopy = []
    arr.forEach( el => {
        arrCopy.push(el)
    })
    
    return arrCopy
}

module.exports = { cloneArr }