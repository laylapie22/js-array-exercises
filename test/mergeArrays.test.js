const { mergeArrays } = require("../mergeArrays")

test("merges 2 arrays of the same value of [1,2,3]", () => {
    const result = mergeArrays([1,2,3],[1,2,3])
    expect(result).toEqual([1,2,3])
})

test("merges 2 arrays with values [1, 2, 3] and [2, 30, 1] ", () => {
    const result = mergeArrays([1,2,3],[2,30,1])
    expect(result).toEqual([1,2,3,30])
})
