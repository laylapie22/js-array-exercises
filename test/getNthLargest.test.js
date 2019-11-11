const { getNthLargest } = require("../getNthLargest")

test("to get the largest", () => {
    const result = getNthLargest([200,300,400,500],1)
    expect(result).toEqual(500)
})

test("to get the 2nd largest", () => {
    const result = getNthLargest([200,300,400,500,100,1000,700],2)
    expect(result).toEqual(700)
})
