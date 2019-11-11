const { longestCommonStr } = require("../longestCommonStr")

test("returns go", () => {
    const result = longestCommonStr(['go','google'])
    expect(result).toEqual('go')
})

test("returns empty", () => {
    const result = longestCommonStr(['hello','google'])
    expect(result).toEqual('')
})

test("returns cake", () => {
    const result = longestCommonStr(['cupcake','strawberry cake'])
    expect(result).toEqual('')
})

test("returns er", () => {
    const result = longestCommonStr(['sunflower','helicopter'])
    expect(result).toEqual('')
})
