//Write a JavaScript function to find an array contains a specific element

const findEl = (arr,el) => {
    return arr.includes(el)
}

const arr = [1,2,3,4,5,6,7,8]
console.log(findEl(arr,0))