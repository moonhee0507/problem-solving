function solution(s) {
    s = s.split(' ').map(Number);
    return `${Math.min(...s)} ${Math.max(...s)}`;
}