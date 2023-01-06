function solution(s, n) {
    
    s = s.split('');
    
    return s.map(v => {
        
        const code = v.charCodeAt(0) + n;
        
        if (v === ' ') return v;
        else if ((/[A-Z]/g.test(v) && code > 90) || (/[a-z]/g.test(v) && code > 122)) {
            return String.fromCharCode(code - 26);
        }
        
        return String.fromCharCode(code);
        
    }).join('');
    
}
