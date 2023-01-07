function solution(n, arr1, arr2) {
    // 10진수 -> 2진수
    arr1 = arr1.map((num) => num.toString(2));
    arr2 = arr2.map((num) => num.toString(2));
    
    // n자리 수로 만들기
    arr1 = arr1.map((binary) => '0'.repeat(n - binary.length) + binary);
    arr2 = arr2.map((binary) => '0'.repeat(n - binary.length) + binary);
    
    const resolveData = {
        '00': ' ',
        '01': '#',
        '10': '#',
        '11': '#'
    }
    
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let temp = '';
        
        for (let j = 0; j < n; j++) {
            temp += resolveData[arr1[i][j] + arr2[i][j]];
        }
        
        answer.push(temp);
    }
    
    return answer;
}