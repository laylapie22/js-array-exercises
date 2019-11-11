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
                console.log(`${nextLevel} less than maxLevel ${maxLevel} flattening further`,el )

                flattenArr(el,destination,maxLevel,nextLevel)
            } else {
                console.log(`maxLevel ${maxLevel} reached, pushing `,el)
                destination.push(el)
            }
        }
    } else {
        console.log(`not an array pushing currentLevel ${currentLevel}`, el)
        destination.push(el)
    }
    })
    return destination
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]],2)) //[1, 2, 3, [[4]], 5, 6]
