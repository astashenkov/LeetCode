var isValid = function(s) {
    const stack = [];
    let checker = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }
        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            if (s[i] === ')' && stack[stack.length - 1] !== '(') {                
                return false;
            } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
                checker = true;
                stack.pop();
            }
            if (s[i] === '}' && stack[stack.length - 1] !== '{') {
                return false;
            } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
                checker = true;
                stack.pop();
            }
            if (s[i] === ']' && stack[stack.length - 1] !== '[') {
                return false;
            } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
                checker = true;
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}