//filter null, false, 0 or blank
const filterFalsy = (arr) => {
    // for ( let i = 0; i < arr.length; i++ ) {
    //     if ( (arr[i] !== false) && (arr[i] !== 0) && (arr[i] !== null) && (arr[i] !== '') ) {
    //         notFalsy.push(arr[i])
    //     }
    // }
    const notFalsy = arr.filter( (e) => {
        //return e !== false && e !== 0 && e !== null && e !== '' && e !== undefined 
        return Boolean(e)
    })
    return notFalsy
}

//console.log(filterValues([1,2,3,0,null,false,'','hello']))

module.exports = { filterFalsy }