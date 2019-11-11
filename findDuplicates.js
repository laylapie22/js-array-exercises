const findDuplicates = (arr) => {
    let uniques = []
    let duplicates = []
    arr.forEach( (el) => {
        /**
         * if uniques array already has the element check if duplicates array 
         * already has this element, if not then push to duplicates
         */
        if ( uniques.includes(el) && !duplicates.includes(el) ) {
            duplicates.push(el)
        } 
        //else { //if unique still does not have this item then push it to uniques array
        if (!uniques.includes(el) ) {
            uniques.push(el)
        }
        //}
    })
    return `the duplicates are ${duplicates}`
}

module.exports = { findDuplicates }