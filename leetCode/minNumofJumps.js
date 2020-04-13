function minNumberOfJumps(array) {
    // Write your code here.
    let arr = new Array(array.length).fill(Infinity);
    arr[0] = 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] >= i - j) {
                arr[i] = Math.min(arr[j] + 1, arr[i])
            }
        }
    }
    return arr[arr.length - 1]

}