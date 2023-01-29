function solution(brown, yellow) {
    let yellowSize = [0, 0];
    
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            if ((i * 2) + (yellow / i * 2) + 4 === brown) {
                yellowSize[0] = yellow / i;
                yellowSize[1] = i;
                break;
            }
        }
    }
    
    return [yellowSize[0] + 2, yellowSize[1] + 2];
}