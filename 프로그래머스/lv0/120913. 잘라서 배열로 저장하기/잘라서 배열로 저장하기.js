function solution(my_str, n) {
    const answer = [];
    const arrayStr = my_str.split('');
    
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        answer.push(arrayStr.splice(0, n));
    }
    return answer.map((item) => item.join(''));
}