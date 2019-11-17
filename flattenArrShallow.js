/** Write a JavaScript program to flatten a nested (any depth) array. 
*   if array is shallow it will only 
*   be flattened by a single level.
*/ 
const flatten = (arr,maxLevel = 0) => {
    const destination = []
    flattenArr(arr, destination, maxLevel)
    return destination
}
const flattenArr = (arr, destination, maxLevel = 0, currentLevel = 0 ) => {
    arr.forEach( (el,i,) => {
        if ( Array.isArray(el) ) {
            if ( maxLevel === 0 && currentLevel === 0) {
                flattenArr(el,destination)
            } else {
                const nextLevel = currentLevel + 1
                if ( nextLevel < maxLevel ) {
                    flattenArr(el,destination,maxLevel,nextLevel)
                } else {
                    destination.push(el)
                }
            }
        } else {
            destination.push(el)
        }
    })
    return destination
}

module.exports = {flatten}
