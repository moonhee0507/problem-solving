function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    
    return d.reduce((prev, curr) => {
        return prev + ((budget -= curr) >= 0);
    }, 0)
}