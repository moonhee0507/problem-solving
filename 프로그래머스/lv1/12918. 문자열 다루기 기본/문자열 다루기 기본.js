function solution(s) {
    if (s.length === 4 || s.length === 6) {
        s = s.split('');
        for (let i = 0; i < s.length; i++) {
            if (parseInt(s[i]) % 1 !== 0) return false;
        }
        
        return true;
    } else return false;
}