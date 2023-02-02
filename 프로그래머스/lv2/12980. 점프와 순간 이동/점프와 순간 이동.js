function solution(n) {
    let usage = 0;
    let i = n;
    
    while (i >= 1) {
        
        if (i % 2 !== 0) {
            usage++;
            i--;
        }
        
        i /= 2;
    }
    
    return usage;
}