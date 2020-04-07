function largestRange(array) {
    // Write your code here.
    let result = []
    let longestString = 0
    let hash = {}
    for (const num of array) {
        hash[num] = true
    }
    for (const num of array) {
        if (!hash[num]) continue;
        hash[num] = false
        let currentLength = 1;
        let left = num - 1;
        let right = num + 1;
        while (left in hash) {
            hash[left] = false;
            currentLength++;
            left--;
        }
        while (right in hash) {
            hash[right] = false;
            currentLength++;
            right++;
        }

        if (currentLength > longestString) {
            longestString = currentLength
            result = [left + 1, right - 1]
        }
    }
    return result

}