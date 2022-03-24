var lengthOfLastWord = function(s) {
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && s[i-1] === ' ' || s[i] !== ' ' && i === 0) {
            len = 1;
        } else if (s[i] !== ' '){
            len++;
        }
    }
    return len;
};