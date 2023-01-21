function solution(s) {    
    s = s.toLowerCase().split(' ');

    return s.map(v => {
        let firstChar = v[0];
        if (firstChar) {
            return /[a-z]/.test(firstChar) ? firstChar.toUpperCase() + v.replace(firstChar, '') : v;
        } else return v;
        
    }).join(' ');
}