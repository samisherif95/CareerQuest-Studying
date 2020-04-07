function subarraySort(array) {
    // Write your code here.
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (isOutOfOrder(i, array, array[i])) {
            min = Math.min(min, array[i])
            max = Math.max(max, array[i])
        }
    }
    if (min === Infinity) return [-1, -1]
    let leftIdx = 0
    let rightIdx = array.length - 1
    while (min >= array[leftIdx]) {
        leftIdx++
    }
    while (max <= array[rightIdx]) {
        rightIdx--
    }
    return [leftIdx, rightIdx]


}
function isOutOfOrder(i, array, num) {
    if (i === 0) return num > array[i + 1]
    if (i === array.length - 1) return num < array[i - 1]
    return num > array[i + 1] || num < array[i - 1]
}
