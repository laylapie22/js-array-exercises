const {remDuplicate} = require("../removeDuplicate")

test("removes duplicate in [1,2,2,3,4]", () => {
    const result = remDuplicate([1,2,2,3,4])
    expect(result).toEqual([1,2,3,4])
})

test("removes duplicate in ['a','a',1,2,2,4,4,6,7]", () => {
    const result = remDuplicate(['a','a',1,2,2,4,4,6,7])
    expect(result).toEqual(["a",1,2,4,6,7])
})