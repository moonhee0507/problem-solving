function solution(k, score) {
    //                              i
    // score [10, 100, 20, 150, 1, 100, 200]
    let answer = []; // 10, 10, 10, 20, 20, 100
    let temp = []; // 150, 100, 100
    
    for (let i = 0; i < score.length; i++) {    
        temp.push(score[i]);
        
        if (i > 0) {
            temp.sort((a, b) => b - a);
            if (i >= k) {
                temp.pop();
            }
        }
        
        answer.push(Math.min(...temp));
    }
    
    return answer;
}