function solution(s) {
    const enWord = { zero: '0', one: '1', two: '2', three: '3', four: '4',
                    five: '5', six: '6', seven: '7', eight: '8', nine: '9' };
    
    let temp = '';
    let answer = s;
    
    for (let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) % 1 !== 0) temp += s[i];

        if (Object.keys(enWord).includes(temp)) {
            answer = answer.replace(temp, enWord[temp]);
            temp = '';
        }  
    }
    
    return parseInt(answer);
}