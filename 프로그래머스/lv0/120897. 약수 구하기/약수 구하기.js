function solution(n) {
    let array = Array(n).fill().map((_, i) => i + 1);
    return array.filter((item) => n % item === 0);
}