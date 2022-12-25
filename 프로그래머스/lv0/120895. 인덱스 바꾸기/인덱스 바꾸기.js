function solution(my_string, num1, num2) {
    let arrayStr = my_string.split(''); // ['h', 'e', 'l', 'l', 'o']
    const one = arrayStr[num1];
    arrayStr[num1] = arrayStr[num2];
    arrayStr[num2] = one;
    
    return arrayStr.join('');
}