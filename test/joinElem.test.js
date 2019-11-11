const { joinElem } = require("../joinElem")

test("to join array of strings to one array", () => {
    const result = joinElem(["Red", "Green", "White", "Black"])
    expect(result).toEqual("Red,Green,White,Black\nRed,Green,White,Black\nRed+Green+White+Black")
})