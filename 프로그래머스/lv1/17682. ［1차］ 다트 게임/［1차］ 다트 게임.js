function solution(dartResult) {
    // 끊기
    dartResult = dartResult.split('');
    let result = [];
    let lastIndex;
    while (dartResult.length > 0) {
        if (dartResult[0] === '1' && dartResult[1] === '0') {
            lastIndex = /[*#]/.test(dartResult[3]) ? 4 : 3;
        } else {
            lastIndex = /[*#]/.test(dartResult[2]) ? 3 : 2;
        }
        let game = dartResult.splice(0, lastIndex);
        result.push(game);
    }
    
    let arr = result.map((pan) => pan.map((attr) => {
        if (/[SDT*#]/.test(attr)) return ' ' + attr;
        else return attr;
    }).join('').split(' '));
    
    let answer = []; // [1,4,27]
    
    // SDT 계산
    for (let i = 0; i < arr.length; i++) {
        let power = arr[i][1] === 'S' ? 1 : arr[i][1] === 'D' ? 2 : 3;
        answer.push(Number(arr[i][0]) ** power);
    }
    
    // 옵션 계산
    let option = arr.map((pan) => pan[2]);
    for (let i = 0; i < option.length; i++) {
        if (option[i] === '*') {
            answer[i] *= 2;
            answer[i-1] *= 2;
        }
        if (option[i] === '#') {
            answer[i] *= -1;
        }
    }
    
    return answer.reduce((prev, curr) => prev + curr, 0);
}