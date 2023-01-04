function solution(absolutes, signs) {
    absolutes = absolutes.map((v, i) => signs[i] ? v : -v);
    return absolutes.reduce((prev, curr) => prev + curr, 0);
}