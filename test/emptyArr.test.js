const {emptyArr} = require("../emptyArr")

test("empties an array, makes values undefined", () => {
    const result = emptyArr([0,1,2,3])
    expect(result).toEqual(undefined)
})