/**Write a simple JavaScript program to 
 * join all elements of the following array into a string.
 * Sample array : myColor = ["Red", "Green", "White", "Black"];
 * Expected Output : 
 * "Red,Green,White,Black"
 * "Red,Green,White,Black"
 * "Red+Green+White+Black"
 */
const joinElem = (arr) => {
    const stringArr = []
    const toString = arr.toString()
    const toJoin = arr.join()
    const joinWithPlus = arr.join("+")
    
    stringArr.push(toString,toJoin,joinWithPlus)
    
    return stringArr.join("\n")
}

module.exports = { joinElem }