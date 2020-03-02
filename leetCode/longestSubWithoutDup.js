function longestSubstringWithoutDuplication(string) {
    // Write your code here.
    let result = ''
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            const sub = string.slice(i, j + 1)
            if (helper(sub) && sub.length > result.length) result = sub
        }
    }
    return result
}
function helper(string) {
    let hash = {}
    string.split('').forEach(char => {
        if (!hash[char]) hash[char] = 0;
        hash[char] += 1
    })
    return Object.values(hash).every(val => val === 1)
}
