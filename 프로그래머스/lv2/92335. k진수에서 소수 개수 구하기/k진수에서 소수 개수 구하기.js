function solution(n, k) {
    const toK = n.toString(k).split('').map(num => Number(num));
    let answer = 0;
    let temp = '';
    let bool = false;

    for (let i = 0; i < toK.length; i++) {
        if (toK[i] === 0) { // 0을 만나면 소수판별 후 answer 증가
            bool = isPrime(Number(temp));
            if (bool) answer++;
            temp = [];
        } else { // 0을 만날때까지 임시저장
            temp += toK[i];
            
            if (i === toK.length - 1) {
                bool = isPrime(Number(temp));
                if (bool) answer++;
            }
        }
    }
    
    return answer;
}

function isPrime(n) {
    if (n === 0 || n === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}