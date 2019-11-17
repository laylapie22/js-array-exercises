const {findEl} = require("../findArrEl")

test("returns true if 3 is inside array", () => {
    const result = findEl([0,1,2,3],3)
    expect(result).toEqual(true)
})

test("returns false if 9 is not inside array", () => {
    const result = findEl([0,1,2,3,6,8],9)
    expect(result).toEqual(true)
})