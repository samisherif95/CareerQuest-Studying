function sameBsts(arrayOne, arrayTwo) {
    // Write your code here.
    if (arrayOne.length !== arrayTwo.length) return false
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true
    if (arrayOne[0] !== arrayTwo[0]) return false

    let leftOne = getSmaller(arrayOne);
    let leftTwo = getSmaller(arrayTwo);

    let rightOne = getLargerOrEqual(arrayOne);
    let rightTwo = getLargerOrEqual(arrayTwo);

    return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo)


}

function getSmaller(array) {
    let smaller = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[0]) smaller.push(array[i])
    }
    return smaller
}

function getLargerOrEqual(array) {
    let larger = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[0]) larger.push(array[i])
    }
    return larger
}

