function solution(n) {
    let obj = {};
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        obj[i] = countDivisor(i) >= 3 ? true : false; 
        // obj = { '1': false, '2': false, ..., '10': true };
    }
    
    for (key in obj) {
        answer.push([key, obj[key]]);
    }
    
    return answer.filter((item) => item[1] === true).length;
}

function countDivisor(num) {
    let answer = 0;
    for (let i = 1; i <= num; i++ ) {
        if (num % i === 0) answer++;
    }
    return answer;
}