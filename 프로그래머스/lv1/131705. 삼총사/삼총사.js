function solution(number) {
    // [-2, 3, 0, 2, -5];
    //         i  j     
    
    let count = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            let target = -(number[i] + number[j]);
            if (number.slice(j + 1).includes(target)) {
                count += number.slice(j + 1).filter((num) => num === target).length;
            }
        }
    }
    
    return count;
}