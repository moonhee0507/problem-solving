function solution(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            array.push(numbers[i] * numbers[j]);
        }
    }
    
    return array.sort((a, b) => b - a)[0];
}