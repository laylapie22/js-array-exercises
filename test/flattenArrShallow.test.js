const { flatten } = require("../flattenArrShallow")

test("to flatten array to a single level", () => {
    const result = flatten([1, [2], [3, [[4]]],[5,6]],2)
    expect(result).toEqual([ 1, 2, 3, [ [ 4 ] ], 5, 6 ])
})