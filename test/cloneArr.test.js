const { cloneArr } = require("../cloneArr")

test("to clone array [1,2,3]",() => {
    const result = cloneArr([1,2,3])
    expect(result).toEqual([1,2,3])
})