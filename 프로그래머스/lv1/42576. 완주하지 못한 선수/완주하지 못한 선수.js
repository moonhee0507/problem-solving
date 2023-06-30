function solution(participant, completion) {
    let answer = "";
    
    let map = new Map();
    
    for (let p of participant) {
        map.set(p, map.get(p) + 1 || 1);
    }
    
    for (let c of completion) {
        if (map.get(c) === 1) map.delete(c);
        else map.set(c, map.get(c) - 1);
    }
    
    for (let [key, value] of map) {
        answer = key;
    }
    
    return answer;
}