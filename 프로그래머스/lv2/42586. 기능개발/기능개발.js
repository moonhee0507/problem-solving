function solution(progresses, speeds) {
    const answer = new Array;
    progresses.forEach((v, i) => {
        if (i === 0) answer.push(Math.ceil((100 - v) / speeds[i]));
        else answer.push(Math.max(Math.ceil((100 - v) / speeds[i]), answer[i-1]));
    });
    
    const obj = new Object;
    for (let day of answer) {
        obj[day] = ++obj[day] || 1;
    }
    
    return Object.values(obj);
}