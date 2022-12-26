const numData = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']];

function solution(numbers) {  
    let temp = '';
    let answer = ''
    
    for (let i = 0; i < numbers.length; i++) {
        temp += numbers.split('')[i];
        if (isMatch(temp)) {
            answer += matchNum(temp);
            temp = '';
        }
    }
    
    return Number(answer);
}

function isMatch(temp) {
    return numData.filter((item) => item[1] === temp).length === 1 ? true : false;
}
function matchNum(temp) {
    return numData.filter((item) => item[1] === temp)[0][0].toString();
}