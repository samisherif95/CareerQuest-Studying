function maxSubsetSumNoAdjacent(arr) {
    // Write your code here.
    if (arr.length === 0) return 0
    let table = new Array(arr.length).fill(0)
    table[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let skip = table[i - 2] === undefined ? 0 : table[i - 2];
        let included = skip + arr[i]
        let notIncluded = table[i - 1]
        table[i] = Math.max(included, notIncluded)
    }
    return table[table.length - 1]
}