function solution(n) {
    let answer = 0;
    let test = n + 1;
    
    while (true) {
        if (test.toString(2).replace(/0/g, '').length === n.toString(2).replace(/0/g, '').length) {
            answer = test;
            break;
        } else test++;
    }
    
    return answer;
}