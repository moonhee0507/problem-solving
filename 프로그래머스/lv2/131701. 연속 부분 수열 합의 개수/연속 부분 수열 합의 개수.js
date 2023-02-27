function solution(elements) {
    const newArray = elements.concat(elements);
    
    let len = 1;
    let answer = [];
    
    for (let i = 0; i < elements.length; i++) {
        let sum = newArray.slice(i, i + len).reduce((prev, curr) => prev + curr, 0);
        answer.push(sum);
        
        if (len < elements.length) {
            if (i === elements.length - 1) {
                len++;
                i = -1;
            }
        }
    }
    
    return [...new Set(answer)].length;
}