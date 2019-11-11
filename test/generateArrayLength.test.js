const { array_range } = require("../generateArrayLength")

test("returns an array with length of 6, increase by one from starting position of -6", () => {
    const result = array_range(-6,6)
    expect(result).toEqual([ -6, -5, -4, -3, -2, -1 ])
})

test("returns an array with length of 5, increase by one from starting position of 1", () => {
    const result = array_range(1,5)
    expect(result).toEqual([ 1,2,3,4,5 ])
})

test("returns an array with length of 2, increase by one from starting position of 30", () => {
    const result = array_range(30,2)
    expect(result).toEqual([30,31])
})

test("returns an array with length of 1, increase by one from starting position of 100", () => {
    const result = array_range(100)
    expect(result).toEqual([100])
})