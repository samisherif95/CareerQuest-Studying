function productSum(array, multi = 1) {
    // Write your code here.
    let sum = 0
    array.forEach(ele => {
        if (Array.isArray(ele)) {
            sum += productSum(ele, multi + 1)
        } else {
            sum += ele
        }
    })
    return sum * multi
}
