function solution(i, j, k) {
    let answer = '';
    for (let x = i; x <= j; x++) {
        answer += x;
    }
    return answer.split('').filter((item) => item === k.toString()).length;
}