const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
const o = ["th","st","nd","rd"]

const Ordinal = (n) => {
    if ( n.toString().includes(1) ) {
        return n + o[1]
    } else if ( n.toString().includes(2) ) {
        return n + o[2]
    } else if ( n.toString().includes(3) ) {
        return n + o[2]
    } else {
        return n + o[0]
    }
}

for (n = 0;n < colors.length; n++ ) {
    const ordinal = n + 1
    
    const output = (Ordinal(ordinal) + " choice is " + colors[n])
    console.log(output) 
}