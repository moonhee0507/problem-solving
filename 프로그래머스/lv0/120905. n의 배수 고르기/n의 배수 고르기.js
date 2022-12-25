function solution(n, numlist) {
    // [false, false, 6, false, false, 9, false, false, 12]
    return numlist.map((num) => isMultiple(n, num)).filter((item) => item !== false);
}

function isMultiple(a, b) {
    if (b % a === 0) return b;
    else return false;
}