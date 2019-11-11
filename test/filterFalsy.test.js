const { filterFalsy } = require("../filterFalsy")

test("removes zero from array", () => {
    const result = filterFalsy([0,1])
    expect(result).toEqual([1])
})

test("removes null from array", () => {
    const result = filterFalsy([null, 1,2,3])
    expect(result).toEqual([1,2,3])
})
