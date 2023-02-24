function solution(k, tangerine) {
    const obj = new Object;
    
    for (let size of tangerine) {
        obj[size] = obj[size] === undefined ? 1 : ++obj[size];
    }
    
    const entry = Object.values(obj).sort((a, b) => b - a);
    
    let sum = 0;
    for (let i = 0; i < entry.length; i++) {
        sum += entry[i];
        if (sum >= k) return i + 1;
    }
}