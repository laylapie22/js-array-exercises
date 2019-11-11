const {sumAndProd} = require("../sumAndProductArr")

test("returns the sum and product of the elements in the array as a string", () => {
    const result = sumAndProd([1,2,3,4,5])
    expect(result).toEqual(`the sum of the elements in the array is 15 the product of the elements in the array is 120`)
})