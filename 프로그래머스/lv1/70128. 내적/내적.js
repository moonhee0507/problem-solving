function solution(a, b) {
    return a.reduce((prev, curr, i) => prev + curr * b[i], 0);
}