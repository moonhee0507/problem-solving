function solution(n, m) {
    
    const getGCD = () => {        
        for (let i = Math.min(n, m); i >= 1; i--) {
            if (n % i === 0 && m % i === 0) {
                return i;
            }
        }
    }
    
    const getLCM = () => {
        let i = 1;
        while (true) {
            if ((Math.max(n, m) * i) % Math.min(n, m) === 0) {
                return Math.max(n, m) * i;
            }
            i++
        }
    }
    
    
    return [getGCD(), getLCM()];
}