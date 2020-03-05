function invertBinaryTree(tree) {
    // Write your code here.
    if (!tree) return
    if (tree.left || tree.right) {
        let left = tree.left
        let right = tree.right
        tree.left = right
        tree.right = left
    }
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
}