function solution(n) {
    let answer = '';
    
    for (let i = 1; i <= n; i++) {
        (i % 2) ? answer += '수' : answer += '박';
    }
    
    return answer;
}