'use strict';
var uniqueArr = function (arr) {
    var sortedArr = arr.sort();
    var i = 0;
    for (var j = 1; j < sortedArr.length; j++) {
        if (sortedArr[i].toLowerCase() !== sortedArr[j].toLowerCase()) {
            i++;
            sortedArr[i] = sortedArr[j];
        }
    }
    return sortedArr.slice(0, i + 1);
};
console.log(uniqueArr(['Apple', 'Orange', 'Banana', 'Apple', 'Banana', "orange", "orange"]));
