function solution(n, l, r) {
  let answer = 0;
  let memo = Array(r - l + 1).fill().map((_, i) => i + l);
  // console.log(memo); //[ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ]
  
  if (n === 1) return memo.filter(v => v !== 3).length;
  
  while (memo.length) {
    const newMemo = [];
    
    for (const el of memo) {
      if (el === 1) answer += 1;
      else {
        if (!!((el + 2) % 5)) {
          const fixedEl = Math.ceil(el / 5);
          newMemo.push(fixedEl);
        }
      }
    }
    
    memo = newMemo;
  }
  
  return answer;
}