function solution(my_string) {
    return my_string.replace(/\D/g, '').split('').map((item) => parseInt(item))
        .sort((a, b) => a - b);
}