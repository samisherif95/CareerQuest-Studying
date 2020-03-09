function levenshteinDistance(str1, str2) {
    // Write your code here.
    let result = [];
    for (let i = 0; i < str2.length + 1; i++) {
        let row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        result.push(row);
    }

    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                result[i][j] = result[i - 1][j - 1]
            } else {
                result[i][j] = 1 + Math.min(result[i - 1][j - 1], result[i - 1][j], result[i][j - 1])
            }
        }
    }
    return result[str2.length][str1.length]
}