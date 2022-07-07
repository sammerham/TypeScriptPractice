'use strict'
const uniqueArr = (arr: string[]) : string[] => {
    const sortedArr: string[] = arr.sort();
    let i: number = 0;
    for (let j = 1; j < sortedArr.length; j++){
        if (sortedArr[i].toLowerCase() !== sortedArr[j].toLowerCase()) {
            i++;
            sortedArr[i] = sortedArr[j];
        }
    }
    return sortedArr.slice(0, i + 1);
}

console.log(uniqueArr(['Apple', 'Orange', 'Banana', 'Apple', 'Banana', "orange", "orange"]));