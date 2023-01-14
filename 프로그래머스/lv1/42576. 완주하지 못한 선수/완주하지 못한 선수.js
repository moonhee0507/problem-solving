function solution(participant, completion) {
    let sum = participant.concat(completion);
    sum.sort();
    
    for (let i = 0; i < sum.length; i += 2) {
        if (sum[i] !== sum[i+1]) return sum[i];
    }
}