function solution(a, b) {
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const lastDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const calcDayDif = lastDate.slice(0, a-1).reduce((prev, curr) => prev + curr, 0) + b;

    return day[(calcDayDif-1) % 7];
}