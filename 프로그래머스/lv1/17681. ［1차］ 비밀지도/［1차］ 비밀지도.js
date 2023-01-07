function solution(n, arr1, arr2) {
    // 10진수 -> 2진수 -> n자리수
    const decode = (arr) => {
        return arr.map((num) => '0'.repeat(n - num.toString(2).length) + num.toString(2));
    };
    
    arr1 = decode(arr1);
    arr2 = decode(arr2);
    
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