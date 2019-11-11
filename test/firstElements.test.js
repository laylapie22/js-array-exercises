const { firstElement } = require("../firstElements")

test("returns the first 3 elements of the array inputed", () => {
    const result = firstElement([1,2,3,4,5,6],3)
    expect(result).toEqual([1,2,3])
})

test("returns the first 5 elements of the array inputed", () => {
    const result = firstElement([1,2,3,4,5,6],5)
    expect(result).toEqual([1,2,3,4,5])
})