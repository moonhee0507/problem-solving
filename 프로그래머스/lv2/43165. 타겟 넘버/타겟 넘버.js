function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    
    const DFS = (depth, sum) => {
        if (depth === len) {
            if (sum === target) answer++;
        } else {
            DFS(depth + 1, sum + numbers[depth]);
            DFS(depth + 1, sum - numbers[depth]);
        }
    }
    
    DFS(0, 0);
    
    return answer;
}