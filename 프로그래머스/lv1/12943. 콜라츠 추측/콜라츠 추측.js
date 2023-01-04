function solution(num) {
    if (num === 1) return 0;
    
    let count = 1;
    
    while (count <= 500) {
        if (num % 2 === 0) num = num / 2;
        else if (num % 2 === 1) num = (num * 3) + 1;
        
        if (num === 1) return count;
        else count++;
    }
    
    return -1;
}