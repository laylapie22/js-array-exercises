const { findDuplicates } = require("../findDuplicates")

test("returns the duplicate copies of 4 and 7" ,() => {
    const result = findDuplicates([1,2,3,4,4,5,7,7])
    expect(result).toEqual(`the duplicates are 4,7`)
})