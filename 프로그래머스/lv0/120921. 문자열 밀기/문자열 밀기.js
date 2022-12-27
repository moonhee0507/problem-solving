function solution(A, B) {
    if (A === B) return 0;
    // A를 밀어서 B를 만들 수 있는가? No => -1, Yes => 몇번
    // A를 밀어서 만들 수 있는 모든 문자 구하기
    const array = [];
    let arrayStr = A.split('') // ['h', 'e', 'l', 'l', 'o']
    
    for (let i = 0; i < A.length; i++) {
        arrayStr.unshift(...arrayStr.slice(-1));
        arrayStr.pop();
        array.push(arrayStr.join(''))
    }
    
    // array = ["ohell","lohel","llohe","elloh","hello"]
    
    if (array.filter((item) => item === B).length) {
        return array.indexOf(B) + 1;
    } else return -1;
}