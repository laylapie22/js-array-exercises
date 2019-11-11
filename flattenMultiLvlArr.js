const flatten = (arr) => {
    const destination = []
    flattenArr(arr,destination)
    return destination
}
const flattenArr = (arr,destination) => {
    arr.forEach( el => {
    if ( Array.isArray(el) ) {
        flattenArr(el,destination)
    } else {
        destination.push(el)
    }
    })
    return destination
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]))