function solution(a, b, n) {
    let receivedCola = 0;
    
    while (n >= a) {
       if (n % a === 0) {
         receivedCola += (n / a) * b;
         n = (n / a) * b;
       } else {
         receivedCola += ((n - n % a) / a) * b;
         n = n - (n - n % a) + ((n - n % a) / a) * b;
       }
    }
    
    return receivedCola;
}