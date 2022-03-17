// Задача не решена. Нужно еще покопать.

var mergeTwoLists = function(list1, list2) {
    const output = [];
    let i = j = 0;
    let comLen = list1.length + list2.length;
    for (let k = 0; k < 7; k++) {
        console.log(i+j);
        if (list1[i] > list2[j]) {
            output[i+j]= list2[j];
            j++;
        } else if (list1[i] < list2[j]) {
            output[i+j] = list1[i];
            i++;        
        } else if (list1[i] === list2[j]) {
            output[i+j] = list1[i];
            i++;
            output[i+j] = list2[j];
            j++;
        }
    }
    return output;
};

console.log('Started!');
console.log(mergeTwoLists([1, 5, 9], [2, 4, 6]));


