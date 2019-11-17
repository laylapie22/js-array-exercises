const { unionArr } = require("../unionArr")

test("union of two arrays", () => {
    const result = unionArr([1,2,3,4],[3,5,6,7])
    expect(result).toEqual([1,2,3,4,5,6,7])
})