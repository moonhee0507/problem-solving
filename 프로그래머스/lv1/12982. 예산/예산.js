function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    
    let i = 0;
    let sum = d[0];
    
    // [1, 5, 8, 8, 20]
    //           i
    
    // i  0  1  2   3
    //sum 1  6  14  22
    
    while (true) {
        if (sum <= budget) {
            i++;
            sum += d[i];
        } else {
            i--;
            break;
        }
    }
    
    return i + 1;
}