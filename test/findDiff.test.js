const { findDiff } = require("../findDiff")

test("finds the difference in elements between two arrays", () => {
    const result = findDiff([1, 2, 3], [100, 2, 1, 10])
    expect(result).toEqual([3,10,100])
})