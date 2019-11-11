const { randomValue, randomIdxGen } = require("../getRandom")

test("to test if the result is present in the array", () => {
    const arr1 = [1,2,3,4,5,6,7]
    const result = randomValue(arr1)
    expect(arr1).toContain(result)
})

test("to test if the result is present in the array", () => {
    const arr1 = [2,4,5,6,"a",10]
    const result = randomValue(arr1)
    expect(arr1).toContain(result)
})