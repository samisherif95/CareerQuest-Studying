function groupAnagrams(words) {
    // Write your code here.
    const result = []
    if (words.length === 1) {
        result.push(words[0])
        return [result]
    }

    // debugger;
    let checker = []
    for (let i = 0; i < words.length; i++) {
        let hash = {}
        const subResult = []
        words[i].split('').forEach(char => {
            if (!hash[char]) hash[char] = 0
            hash[char] += 1
        })
        for (let j = i; j < words.length; j++) {
            let temp = { ...hash };
            words[j].split('').forEach(char => {
                if (!temp[char]) temp[char] = 0
                temp[char] -= 1
            })
            if (Object.values(temp).every(val => val === 0)) {
                if (checker.includes(words[j])) { continue }
                checker.push(words[j])
                subResult.push(words[j])
            }
        }
        if (subResult.length !== 0) result.push(subResult)
    }
    return result
}
console.log(groupAnagrams(['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp']))
