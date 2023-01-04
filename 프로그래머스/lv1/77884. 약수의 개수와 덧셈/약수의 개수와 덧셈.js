function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        (!(countDiv(i) % 2)) ? answer += i : answer -= i;
    }
    
    return answer;
}

const countDiv = (num) => {
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        if (!(num % i)) count++; 
    }
    
    return count;
}