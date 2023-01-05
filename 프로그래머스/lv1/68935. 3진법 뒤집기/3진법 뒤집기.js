function solution(n) {
    
    n = n.toString(3); // 10진법 -> 3진법
    n = n.split('').reverse().join(''); // 앞뒤 반전 => 21
    
    return parseInt(n, 3); // 10진법으로 변경
}