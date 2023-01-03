function solution(n) {
    let i = 1;
    while (true) {
        if (n % i !== 1) i++;
        else break;
    }
    return i;
}