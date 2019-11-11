const { findPairValues } = require("../findPairValues")

test("returns the two elements that adds up to 50", () => {
    const result = findPairValues([10,20,30,40,50],50)
    expect(result).toEqual("10,40")
})

test("returns the two elements that adds up to 100", () => {
    const result = findPairValues([10,20,50,40,50],100)
    expect(result).toEqual("50,50")
})