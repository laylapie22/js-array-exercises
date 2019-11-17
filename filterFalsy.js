//filter null, false, 0 or blank
const filterFalsy = (arr) => {
    const notFalsy = arr.filter( (e) => {
    
        return Boolean(e)
    })
    return notFalsy
}

module.exports = { filterFalsy }