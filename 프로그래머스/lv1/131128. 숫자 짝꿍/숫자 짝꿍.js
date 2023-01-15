function solution(X, Y) {
    let answer = '';
    
    X = X.split('');
    Y = Y.split('');
    
    for (let i = 9; i >= 0; i--) {
        let countIndexInX = X.filter(v => v === i.toString()).length;
        let countIndexInY = Y.filter(v => v === i.toString()).length;
        answer += String(i).repeat(Math.min(countIndexInX, countIndexInY));
    }
    
    if (answer === '') return '-1';
    if (parseInt(answer) === 0) return '0';
    
    return answer;
}