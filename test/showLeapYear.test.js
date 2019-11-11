const {leapYearRange,checkLeapYear} = require("../showLeapYears")

test("shows leap years between 2000 and 2012", () => {
    const result = leapYearRange(2000,2012)
    expect(result).toEqual([2000,2004,2008,2012])
})

test("shows leap years between 2012 and 2020", () => {
    const result = leapYearRange(2012,2020)
    expect(result).toEqual([2012,2016,2020])
})