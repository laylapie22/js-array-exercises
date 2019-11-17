const { sortArr } = require("../sortItems")

test("sort items in smallest to highest value", () => {
    const result = sortArr([3,2,6,5,7,5])
    expect(result).toEqual([ 2, 3, 5, 5, 6, 7 ])
})