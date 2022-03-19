var strStr = function(haystack, needle) {
    let result = 0;
    if (needle) result = -1;
    if (haystack === needle) return 0;
    let x = (needle.length === 1) ? 1 : 0;
    if (!haystack.includes(needle) || haystack === '') {
        return result;
    } else {
        for (let i = 0; i <= (haystack.length - needle.length + x); i++) {
            if (needle === haystack.slice(i, (i + needle.length))) return i;
        }
    } 
};  