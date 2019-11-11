const { rangeBetween } = require("../generateArraySteps")

test("returns an array with values 4 to 7", () => {
    const result = rangeBetween(4,7)
    expect(result).toEqual([4,5,6,7])
})

test("returns an array with values 1 to 5", () => {
    const result = rangeBetween(1,5)
    expect(result).toEqual([1,2,3,4,5])
})

test("returns an array with values 6 to 10", () => {
    const result = rangeBetween(6,10)
    expect(result).toEqual([6,7,8,9,10])
})

test("returns an array with values 100 to 105", () => {
    const result = rangeBetween(100,105)
    expect(result).toEqual([100,101,102,103,104,105])
})