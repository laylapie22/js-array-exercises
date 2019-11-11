const {mostFreq} = require("../mostFrequentItem")

test("returns 4 as the most frequent", () => {
    const result = mostFreq([1,2,3,4,4,4,4])
    expect(result).toEqual("4 (4 times)")
})

test("returns a as the most frequent", () => {
    const result = mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
    expect(result).toEqual("a (5 times)")
})