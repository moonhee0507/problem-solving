function solution(clothes) {
    const obj = new Object();
    
    for (let item of clothes) {
        obj[item[1]] = obj[item[1]] === undefined ? [item[0]] : obj[item[1]].concat([item[0]]);
    }
    
    const arr = Object.values(obj).map(v => v.length);
    let answer = 1;
    arr.forEach(v => {
        answer *= (v + 1);
    })
    
    return answer - 1;
}