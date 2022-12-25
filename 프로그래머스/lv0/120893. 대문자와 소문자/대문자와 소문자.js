function solution(my_string) {
    let answer = '';
    my_string.split('').map((str) => {
        return answer += str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase();
    });
    return answer;
}