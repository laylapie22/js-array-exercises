const { shuffle } = require("../shuffleArr")

test("to check if the shuffled array has the same length as the original", () => {
    const arr = ([1,2,3,5])
    const result = shuffle(arr,5)
    expect(result.length).toEqual(arr.length)
})
