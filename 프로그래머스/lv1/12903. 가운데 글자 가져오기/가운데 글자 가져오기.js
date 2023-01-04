function solution(s) {    
    const middle = Math.trunc(s.length / 2);
    return s.length % 2 ? s[middle] : s[middle - 1] + s[middle];
}