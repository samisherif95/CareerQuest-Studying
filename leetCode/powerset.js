function powerset(array) {
    // Write your code here.
    let result = [[]]
    for (const ele of array) {
        let len = result.length;
        for (let i = 0; i < len; i++) {
            const current = result[i]
            result.push(current.concat(ele));
        }
    }
    return result

}