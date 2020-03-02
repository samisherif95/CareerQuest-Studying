function moveElementToEnd(arr, toMove) {
    // Write your code here.
    let i = 0;
    let j = arr.length - 1
    while (i < j) {
        while (i < j && arr[j] === toMove) j--;
        if (arr[i] === toMove) swap(arr, i, j)
        i++
    }
    return arr
}
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    return arr
}