function solution(n, words) {
    let answer = 0;
    
    words.reduce((prev, curr, i) => {
        answer = answer 
                || ((words.slice(0, i).includes(curr) || prev !== curr[0]) ? i : answer);
        return curr[curr.length - 1];
    }, '');

    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}