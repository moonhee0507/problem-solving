function solution(numbers) {
    let n = 0;
    let answer = 0;
    
    while (n < 10) {
        if (numbers.includes(n)) n++;
        else {
            answer += n;
            n++;
        }
    }
    
    return answer;
}