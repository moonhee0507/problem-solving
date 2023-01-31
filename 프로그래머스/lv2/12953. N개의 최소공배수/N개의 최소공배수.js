function solution(arr) {
    let answer = 0;

    return arr.reduce((prev, curr) => {
        answer = getLcm(prev, curr);
        return getLcm(answer, curr);
    }, 1);
}

const getLcm = (a, b) => {
    for (let i = Math.max(a, b); i <= a * b; i += Math.max(a, b)) {
        if (i % Math.min(a, b) === 0) return i;
    }
};