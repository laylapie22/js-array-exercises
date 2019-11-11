const { isArr } = require("../isArray")

test("to test if empty [] returns true", () => {
    const result = isArr([])
    expect(result).toEqual(true)
})

test("to test if string returns false", () => {
    const result = isArr("hello")
    expect(result).toEqual(false)
})

test("to test if object {} returns false", () => {
    const result = isArr({"name":"Layla"})
    expect(result).toEqual(false)
})

test("to test if array of objects returns true", () => {
    const result = isArr([{"id":1},{"id":2}])
    expect(result).toEqual(true)
})
