function solution(progresses, speeds) {
    // 초기화
    let answer = [0];
    let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i])); // [7, 3, 9]
    let std = days[0];

    for(let i = 0, j = 0; i < days.length; i++){
        if(std >= days[i]) {
            answer[j] += 1;
        } else {
            std = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}