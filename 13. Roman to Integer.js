var romanToInt = function(s) {
    let sum = 0,
        chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
        nums = [1, 5, 10, 50, 100, 500, 1000];
    for (let i=0; i<=s.length-1; i++) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            sum += 4;
            i += 1;
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            sum += 9;
            i += 1;
        } else if (s[i] === 'X' && s[i+1] === 'L') {
            sum += 40;
            i += 1;
        } else if (s[i] === 'X' && s[i+1] === 'C') {
            sum += 90;
            i += 1;
        } else if (s[i] === 'C' && s[i+1] === 'D') {
            sum += 400;
            i += 1;
        } else if (s[i] === 'C' && s[i+1] === 'M') {
            sum += 900;
            i += 1;
        } else {
            sum += nums[chars.indexOf(s[i])];
        }
    };
    return sum;
}