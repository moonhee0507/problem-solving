function solution(n) {
    n = BigInt(n);
    let arrFibo = [BigInt(0), BigInt(1)];
    // let sum = 0;
    
    for (let i = BigInt(2); i <= n; i++) {
        // sum = arrFibo[arrFibo.length - 2] + arrFibo[arrFibo.length - 1];
        arrFibo.push(arrFibo[0] + arrFibo[1]);
        // arrFibo.push(sum)
        arrFibo.shift();
    }
    
    return arrFibo[1] % BigInt(1234567);
}