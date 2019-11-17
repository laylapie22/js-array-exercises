const { moveElement } = require("../moveElement")

test("to move positions of index 0 and 2" , () => {
    const result = moveElement([1,2,3,4,5],0,2)
    expect(result).toEqual([3,2,1,4,5])
})

test("to move positions of index 3 and 4" , () => {
    const result = moveElement([1,2,3,4,5,6,7,8],3,4)
    expect(result[4]).toEqual(4)
})