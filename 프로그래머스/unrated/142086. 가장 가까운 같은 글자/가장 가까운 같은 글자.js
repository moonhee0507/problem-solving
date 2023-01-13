function solution(s) {
    //                    0    1    2    3    4    5
    s = s.split(''); // ['b', 'a', 'n', 'a', 'n', 'a'];
    //                                   i
    //                         j
    
    let answer = [-1]; // -1, -1
    for (let i = 1; i < s.length; i++) {
        let count = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === s[i]) {
                answer.push(i - j);
                count++;
                break;
            }
        }
        if (count === 0) answer.push(-1);
    }
    
    return answer;
}