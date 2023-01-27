function solution(s) {
    s = s.split('');
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
        if (answer[answer.length - 1] === answer[answer.length - 2]) {
            answer.pop();
            answer.pop();
        }
    }
    
    return answer.length == 0 ? 1 : 0;
}