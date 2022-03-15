var mergeTwoLists = function(list1, list2) {
    return [].concat(list1, list2).sort();
};

console.log(mergeTwoLists([1, 5, 9], [2, 4, 6]));


// Не совсем верно. Скорее всего я неправильно понял условие. Нужно разобраться