function solution(a, b) {
    return a.map((v, i) => v * b[i]).reduce((a, b) => a + b, 0);
}