function solution(num, total) {
    const array = Array(1000).fill().map((_, i) => i - 500);
    let answer;
    for (let i = 0; i < array.length; i++) {
        const temp = [...array].splice(i, num);
        if (temp.reduce((prev, curr) => prev + curr, 0) === total) answer = temp;
    }
    
    return answer;
}