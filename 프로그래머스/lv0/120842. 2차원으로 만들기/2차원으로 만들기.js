function solution(num_list, n) {
    const answer = [];
    const copy = [...num_list];
    for (let i = 0; i < copy.length / n; i++) {
        answer.push(num_list.splice(0, n));
    }
    
    return answer;
}