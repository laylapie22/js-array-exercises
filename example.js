

const arrMap = (arr1,arr2) => {
    const temp = []
    array1 = arr1.toString().split(',').map(Number);
    array2 = arr2.toString().split(',').map(Number);

    for ( let i = 0; i < array1.length; i++ ) {
        temp.push(array1[i])
    }
    for ( let i = 0; i < array2.length; i++ ) {
        temp.push(array2[i])
    }
    return temp
}
console.log(arrMap([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]] ))