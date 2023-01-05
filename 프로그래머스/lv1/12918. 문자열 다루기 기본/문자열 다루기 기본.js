function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return /\D/g.test(s) ? false : true;
    } else return false;
}