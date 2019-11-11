const { evenElem } = require("../separateEven")

test("inserts dashes between 2,4,6 and 8", () => {
 const result = evenElem(124689)
 expect(result).toEqual('12-4-6-89')
})

test("inserts dashes between 2,2,2", () => {
 const result = evenElem(222135)
 expect(result).toEqual('2-2-2135')
})




