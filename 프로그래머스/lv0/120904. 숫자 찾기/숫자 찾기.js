function solution(num, k) {
    const array = String(num).split('').map((str) => parseInt(str)); //[2, 9, 1, 8, 3]
    
    if (array.filter((item) => item === k).length !== 0) {
        return array.indexOf(k) + 1;
    } else return -1;
}