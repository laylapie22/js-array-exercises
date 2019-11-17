/**
* Write a JavaScript program to 
*  remove duplicate items from an array 
*/
const remDuplicate = (arr) => {
    const set = new Set(arr)

    return Array.from(set)
}

module.exports = {remDuplicate}
