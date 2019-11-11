const longestCommonStr = (arr1) => {
    const arr =  arr1.sort()
    const a1 = arr1[0]
    const a2 = arr1[arr1.length - 1]
    let i = 0
    while ( i < arr1.length && (a1.charAt(i)=== a2.charAt(i)) ) {
        i++
    }
    return a1.substring(0,i)

    // const a1 = arr1[0]
    // const a2 = arr1[arr1.length - 1]
    // let result = []
    // for ( let i = 0; i < arr1.length; i++ ) {
    //     if ( a1.charAt(i) === a2.charAt(i) ) {
    //         result.push(a1.substring(i))
    //     }
    // }
    // return result

}
//console.log(longestCommonStr(['go','google']))

module.exports = { longestCommonStr }