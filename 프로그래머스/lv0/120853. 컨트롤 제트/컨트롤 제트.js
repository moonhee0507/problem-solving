function solution(s) {
    return s.split(' ').map((item, i) => {
        if (item === 'Z') return 0 - parseInt(s.split(' ')[i-1]);
        else return parseInt(item);
    }).reduce((a, b) => a + b, 0)
}