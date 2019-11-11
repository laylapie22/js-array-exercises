const {sumPositions} = require("../sumPositions")

test("returns the sum of the same array index from individual array", () => {
    const result = sumPositions([1,0,2,3,4],[3,5,6,7,8,13])
    expect(result).toEqual([4, 5, 8, 10, 12, 13])
})