function solution(n) {
    let arrayDivisor = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arrayDivisor.push(i)
    } // arrayDivisor = [1, 2, 3, 4, 6, 12]
    
    return arrayDivisor.map((num) => {
        if (isPrimeNumber(num) === false) return false
        else return num;
    }).filter((item) => item !== false)
    .sort((a, b) => a - b);
}

function isPrimeNumber(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) array.push(i);
    }
    
    return array.length === 2 ? true : false;
}