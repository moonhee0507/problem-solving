function solution(n) {
    let array = Array(200).fill().map((_, i) => i + 1);
    array = array.map((num) => {
        if (num % 3 === 0) return null;
        else if (String(num).includes(3)) return null;
        return num
    })
    
    return array.filter((item) => item !== null)[n-1];
}