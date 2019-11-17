const { searchEl } = require("../binarySearch")

test("to return the index of a search value 9",() => {
    const result = searchEl([1, 2, 3, 4, 5, 7, 8, 9],9)
    expect(result).toEqual(7)
})