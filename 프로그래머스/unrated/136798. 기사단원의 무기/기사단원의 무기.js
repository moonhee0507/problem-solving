function solution(number, limit, power) {
    let eachPower = [1];
    
    for (let i = 2; i <= number; i++) {
        let count = 0;
        
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
                if (i / j !== j) {
                    count++;
                }
            }
        }
        eachPower.push(count);
    }
    
    return eachPower.map(v => v > limit ? power : v).reduce((a, b) => a + b, 0);
}