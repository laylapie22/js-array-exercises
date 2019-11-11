const { swapCase } = require("../swapCase")

test("alternate each of the case keys of 'The Quick Brown Fox'" ,() => {
    const result = swapCase('The Quick Brown Fox')
    expect(result).toEqual('tHE qUICK bROWN fOX')
})