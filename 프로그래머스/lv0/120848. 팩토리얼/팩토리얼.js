function solution(n) {
    let answer = 1;
    const factorial = (num) => num === 0 ? 1 : Math.floor(num) * Math.floor(factorial(num - 1));
    for (let i = 1; i <= 3628800; i++) {
        if (factorial(answer) <= n) answer = i;
    }
    return answer - 1;
}