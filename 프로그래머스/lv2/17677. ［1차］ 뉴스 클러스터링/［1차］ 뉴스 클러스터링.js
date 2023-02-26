function solution(str1, str2) {
    str1 = makeSet(str1.toUpperCase());
    str2 = makeSet(str2.toUpperCase());
    
    if (str1.length === 0 && str2.length === 0) return 65536;
    
    // 집합 크기 구하기
    const std = str1.length <= str2.length ? str1 : str2;
    const compare = std === str1 ? str2 : str1;
    let countIntersection = 0;
    let countUnion = std.length;
    for (let i = 0; i < std.length; i++) {        
        if (compare.includes(std[i])) {
            countIntersection++;
            compare[compare.indexOf(std[i])] = true;
        }
    }
    countUnion += compare.filter(v => v !== true).length;

    return Math.trunc((countIntersection / countUnion) * 65536);
}

function makeSet(str) {
    const answer = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i+1] !== undefined) {
            let element = str[i] + str[i+1];
            if (/[^A-Z]/g.test(element) !== true) answer.push(element);
        } else break;
    }
    
    return answer;
}