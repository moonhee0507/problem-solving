function solution(balls, share) {
    if (balls === share) return 1;
    
    const factorial = (n) => {
        return BigInt(n) === BigInt(0) ? BigInt(1) : BigInt(n) * factorial(BigInt(n)-BigInt(1));
    }
    
    return factorial(balls) / factorial(share) / factorial(balls-share);
}