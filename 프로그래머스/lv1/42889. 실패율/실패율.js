function solution(N, stages) {
    let failureRate = [];
    
    for (let i = 1; i <= N; i++) {
        let reachStage = stages.filter((stage) => stage >= i);
        let noSuccessState = reachStage.filter((stage) => stage <= i);
        
        failureRate.push(noSuccessState.length / reachStage.length);
    }
    
    return failureRate.map((v, i) => [i+1, v]).sort((a, b) => b[1] - a[1]).map((set) => set[0]);
}