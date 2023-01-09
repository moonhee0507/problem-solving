function solution(n) {
    let answer = [];
    
    const isPrime = (n) => {
        for (let x of answer) {
            if (x > Math.sqrt(n)) return true;
            if (Number.isInteger(n / x)) return false;
        }
        
        return true;
    }
    
    for (let i = 2; i <= n; i++) {
        if (!i % 2) continue;
        if (isPrime(i)) answer.push(i);
    }
    
    return answer.length;
}