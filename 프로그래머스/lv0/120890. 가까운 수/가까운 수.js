function solution(array, n) {
    const arrayAbs = [];
    
    for (let i = 0; i < array.length; i++) {
        arrayAbs.push([array[i], Math.abs(n - array[i])]);    
    } // arrayAbs = [[3, 17], [10, 10], [28, 8]]
    
    const temp = [...arrayAbs].sort((a, b) => a[1] - b[1]);
    // [[28, 8], [10, 10], [3, 17]]
    
    let minAbs = 0;
    
    if (temp[0][1] === temp[1][1]) {
        minAbs = Math.min(temp[0][0], temp[1][0]);
    } else minAbs = temp[0][0];
    
    
    return minAbs;
}