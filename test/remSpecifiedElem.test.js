const { removeSpecElem } = require("../remSpecifiedElem")

test("removes 3 and returns an array without 3", () => {
    const result = removeSpecElem([1,2,4,5,3,5,6,7],3)
    expect(result).toEqual([1,2,4,5,5,6,7])
}) 