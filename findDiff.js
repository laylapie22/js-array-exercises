const findDiff = (arr1,arr2) => {
    const unique = []
    array1 = arr1.toString().split(',').map(Number);
    array2 = arr2.toString().split(',').map(Number);
    for( let i = 0; i < array1.length; i++ ) {
        if ( array2.indexOf(array1[i]) < 0 ) {
            unique.push(array1[i])
        }
    }
    for( let i = 0; i < array2.length; i++ ) {
        if (array1.indexOf(array2[i]) < 0 ) {
            unique.push(array2[i])
        }
    }

    return unique
}

console.log(findDiff([1, 2, 3], [100, 2, 1, 10]));
console.log(findDiff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
