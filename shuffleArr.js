
const getRandomInt = (max) => {
    return Math.floor( Math.random() * max)
}

const shuffle = (arr,shuffleTimes = 10) => {   
    for ( let i = 0; i < shuffleTimes; i++ ) {
        const randomIdx1 = getRandomInt(arr.length)
        const randomIdx2 = getRandomInt(arr.length) 

        const valueIdx1 = arr[randomIdx1]
        const valueIdx2 = arr[randomIdx2]

        arr[randomIdx1] = valueIdx2
        arr[randomIdx2] = valueIdx1

    }

    return arr
}

//console.log(shuffle([1,3,4,5],10))

module.exports = { shuffle }