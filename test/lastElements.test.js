const {lastElem} = require("../lastElements")

test("returns the last 3 elements of the array as an array", () => {
    const result = lastElem([7,8,9,10],3)
    expect(result).toEqual([8,9,10])
})

test("returns the last 2 elements of the array as an array", () => {
    const result = lastElem([7,8,9,10],2)
    expect(result).toEqual([9,10])
})

test("returns the last 5 elements of the array as an array", () => {
    const result = lastElem([20,23,56,65,78,32],5)
    expect(result).toEqual([23,56,65,78,32])
})