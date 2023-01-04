function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const i = arr.indexOf(Math.min(...arr));
    
    return arr.filter((num) => num !== arr[i]);
}