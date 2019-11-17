/** We have the following arrays
 * color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; o = ["th","st","nd","rd"] 
 * Write a JavaScript program to 
 * display the colors in the following way : 
 * "1st choice is Blue ." 
 * "2nd choice is Green." 
 * "3rd choice is Red."
 * and so on...
 * Note : Use ordinal numbers to tell their position. */
const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
const o = ["st","nd","rd","th"]

const ordinal = (n) => {
    if ( n.toString() === "1" ) {
        return n + o[0]
    } else if ( n.toString() === "2" ) {
        return n + o[1]
    } else if ( n.toString() === "3" ) {
        return n + o[2]
    } else {
        return n + o[3]
    }
}

for (let n = 0;n < colors.length; n++ ) {
    const colorCount = n + 1
    
    const output = (ordinal(colorCount) + " choice is " + colors[n])
    console.log(output) 
}