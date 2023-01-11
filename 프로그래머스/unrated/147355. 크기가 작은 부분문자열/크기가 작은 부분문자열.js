function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let num = t.substr(i, p.length);
        if (parseInt(num) <= parseInt(p)) {
            count++;
        }
    }
    
    return count;
}