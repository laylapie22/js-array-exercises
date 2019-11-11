const rangeBetween = (num1,num2) => {
    const arr = []
    for ( let i = num1; i <= num2; i++ ) {
        arr.push(i)
    }
    return arr
}

//console.log(rangeBetween(4,7))
module.exports = { rangeBetween }