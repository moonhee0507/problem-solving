function solution(clothes) {
    // headgear: "y", "g"
    // eyewear : "b"
    
    const obj = {};
    
    for (let [n, s] of clothes) {
        obj[s] = obj[s] === undefined ? [n] : obj[s].concat([n]);
    }
    
    const arr = Object.values(obj).map((item) => item.length);
    
    let answer = 1;
    
    arr.forEach((num) => {
        answer *= (num + 1);
    })
    
    return answer - 1;
}