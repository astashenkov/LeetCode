var longestCommonPrefix = function(strs) {
    let minLength = 200,
        comPref = '',
        checker;
    strs.forEach((s) => {
        if (s.length < minLength) {
            minLength = s.length;
        }
    });
    for (let i = 0; i <= minLength - 1; i++) {
        checker = true;
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j+1][i]) {
                checker = false;
            }
        }
        if (checker) {
            comPref += strs[0][i];
        } else {
            return comPref;
        }
    }
    return comPref;
}