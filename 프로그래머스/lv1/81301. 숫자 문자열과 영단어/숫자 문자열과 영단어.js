function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    let answer = s;
    
    for (let i = 0; i < numbers.length; i++) {
        answer = answer.split(numbers[i]).join(i);
    }
    
    return parseInt(answer);
}