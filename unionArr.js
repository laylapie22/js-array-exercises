const unionArr = (arr1,arr2) => {
    let union = []
    for ( let i = 0; i < arr1.length; i++ ) {
        union.push(arr1[i])
    }
    for( let i = 0; i < arr2.length; i++ ) {
        union.push(arr2[i])
    }

    const set = new Set(union)
    return Array.from(set)
}

console.log(unionArr([1,2,3,4],[3,5,6,7]))