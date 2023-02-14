function solution(s) {    
    s = s.split('');
    let answer = 0;
    
    // 1) s 순회하면서 올바른 문자열인지 확인 후
    // 2) 왼쪽으로 한칸씩 당기기
    for (let i = 0; i < s.length; i++) {
        if (isRight(s)) answer++;
        s.push(s.shift());
    }
    
    return answer;
}

// 닫는 괄호가 나왔을 때 짝 찾기 용도 - 짝은 stack에 보관
const pair = {'}': '{', ')': '(', ']': '['};

// 올바른 문자열인지 확인하는 함수
function isRight(arr) {
    const stack = []; // 여는 괄호 보관

    // 매개변수로 받은 배열 순회
    for (let i = 0; i < arr.length; i++) {
        const std = arr[i];

        // std번째 원소가 여는 괄호면 stack에 넣기
        if (pair[std] === undefined) stack.push(std);
        else { // std번째 원소가 닫는 괄호면
            // 그 원소가 stack의 마지막 원소와 다르면 false 반환
            if (stack.at(-1) !== pair[std]) return false;
            // 같으면 꺼내기
            stack.pop();
        }
    }

    if (stack.length) return false;
    return true;
}