const { sumSq } = require("../sumOfSquares")

test("sums up the square of all the elements in the array, expected result is 30", () => {
    const result = sumSq([1,2,3,4])
    expect(result).toEqual(30)
})