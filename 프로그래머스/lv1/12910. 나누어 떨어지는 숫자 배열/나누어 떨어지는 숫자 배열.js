function solution(arr, divisor) {
    arr = arr.filter((num) => !(num % divisor));
    
    if (arr.length === 0) return [-1];
    return arr.sort((a, b) => a - b);
}