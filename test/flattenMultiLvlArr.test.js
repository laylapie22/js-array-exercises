const { flatten } = require("../flattenMultiLvlArr")

test("to flatten array to the max level", () => {
    const result = flatten([1, [2], [3, [[4]]],[5,6]],2)
    expect(result).toEqual([1,2,3,4,5,6])
})