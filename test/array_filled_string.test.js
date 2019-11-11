const { stringFilledArr } = require("../array_filled_string")

test("fills an array with 4 hello strings", () => {
    const result = stringFilledArr(4,'hello')
    expect(result).toEqual(['hello','hello','hello','hello'])
})