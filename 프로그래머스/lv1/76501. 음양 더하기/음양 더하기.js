function solution(absolutes, signs) {
    return absolutes.reduce((prev, curr, i) => prev + curr * (signs[i] ? 1 : -1), 0);
}