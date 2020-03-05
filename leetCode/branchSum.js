class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    // Write your code here.
    let result = []
    let runningSum = 0
    helper(root, runningSum, result)
    return result;
}

function helper(root, runningSum, result) {
    if (!root) return
    let newSum = root.value + runningSum
    if (!root.left && !root.right) {
        result.push(newSum)
        return
    }
    helper(root.left, newSum, result);
    helper(root.right, newSum, result)
}