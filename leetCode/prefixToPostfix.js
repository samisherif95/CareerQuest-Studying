function prefixToPostfix(prefixes) {
    // Write your code here
    let result = []
    for (let i = 0; i < prefixes.length; i++) {
        result.push(helper(prefixes[i]))
    }
    return result
}

function helper(prefix) {
    let stack = []
    let arr = prefix.split('')
    let length = arr.length
    for (let i = length - 1; i >= 0; i--) {
        if (isSign(arr[i])) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let temp = op1 + op2 + arr[i]
            stack.push(temp)
        } else {
            stack.push(arr[i])
        }
    }
    return stack
}

function isSign(char) {
    switch (char) {
        case '/':
            return true;
            break;
        case '*':
            return true;
            break;
        case '+':
            return true;
            break;
        case '-':
            return true;
            break;
    }
    return false;
}
