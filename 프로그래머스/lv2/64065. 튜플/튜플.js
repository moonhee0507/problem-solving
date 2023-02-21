function solution(s) {
    s = s.split('},{').map(v => v.replace(/[{{|}}]/g, '').split(',').map(arr => Number(arr))).sort((a, b) => a.length - b.length);
    
    const stack = new Array();

    for (let i = 0; i < s.length; i++) {
      // 스택에 같은 숫자가 없는 경우에 스택에 값을 넣어라
      s[i].forEach(el => {
        if (!stack.includes(el)) stack.push(el);
      })
    }
    
    return stack;
}