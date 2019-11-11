const leapYearRange = (y1,y2) => {
    let yearRange = [] //this willl hold the years in between the entered years
    for ( let i = y1; i <= y2; i++ ) {
        yearRange.push(i)
    }
    let leapYears = []

    yearRange.forEach( (year) => {
        if ( checkLeapYear(year) ) {
            leapYears.push(year)
        }
    })
    return leapYears
}
    
const checkLeapYear = (year) => {
    if ( ( (year % 4 === 0) && (year % 100 !== 0) ) 
    || ( (year % 100 === 0) && (year % 400 === 0) ) ) {
        return year
    }
    return false;
}


//console.log(leapYearRange(2000,2012))

module.exports = {leapYearRange,checkLeapYear}
