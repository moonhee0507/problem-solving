function solution(n) {
    let answer = 0;
    let test = n + 1;
    const countOne = (num) => num.toString(2).replace(/0/g, '');
    while (true) {
        if (countOne(test) === countOne(n)) {
            answer = test;
            break;
        } else test++;
    }
    
    return answer;
}