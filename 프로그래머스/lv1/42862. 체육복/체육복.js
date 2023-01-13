function solution(n, lost, reserve) {
    // lost에 있으면서 reserve에 있는 학생 각 배열에서 제거
    let commonToRemove = [];
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                commonToRemove.push(lost[i]);
            }
        }
    }
    
    lost = lost.filter(v => !commonToRemove.includes(v));
    reserve = reserve.filter(v => !commonToRemove.includes(v));
    
    // 왼쪽부터 고려하고 빌렸으면 0 처리
    let count = 0;
    let array = Array(n).fill().map((_, i) => i + 1); // [1, 2, 3, 4, 5]
    
    for (let i = 0; i < array.length; i++) {
        if (!lost.includes(array[i])) count++;
        else {
            if (reserve.includes(array[i] - 1)) {
                reserve[reserve.indexOf(array[i] - 1)] = 0;
                count++;
            } else if (reserve.includes(array[i] + 1)) {
                reserve[reserve.indexOf(array[i] + 1)] = 0;
                count++;
            }
        }
    }
    
    return count;
}