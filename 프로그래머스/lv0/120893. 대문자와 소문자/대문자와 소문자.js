function solution(my_string) {
    return my_string.split('').map((str) => {
        if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
            return String.fromCharCode(str.charCodeAt(0) + 32);
        } else if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
            return String.fromCharCode(str.charCodeAt(0) - 32);
        }
    }).join('');
}