function solution(s) {
    const obj = {};
    const answer = [];
    
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = obj[s[i]] === undefined ? 1 : ++obj[s[i]];
    }
    
    for (let key in obj) {
        if(obj[key] === 1) answer.push(key);
    }
    
    return answer.sort().join('');
}
