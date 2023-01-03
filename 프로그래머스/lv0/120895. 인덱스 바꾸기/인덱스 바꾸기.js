function solution(my_string, num1, num2) {
    const [str1, str2] = [my_string[num1], my_string[num2]];
    
    my_string = my_string.split('');
    my_string.splice(num1, 1, str2);
    my_string.splice(num2, 1, str1);
    
    return my_string.join('');
}