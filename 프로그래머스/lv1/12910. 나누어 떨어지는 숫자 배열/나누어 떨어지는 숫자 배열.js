function solution(arr, divisor) {
    arr = arr.map((num) => num % divisor === 0 ? num : false)
             .filter((item) => item !== false);
    
    if (arr.length === 0) return [-1];
    return arr.sort((a, b) => a - b);
}