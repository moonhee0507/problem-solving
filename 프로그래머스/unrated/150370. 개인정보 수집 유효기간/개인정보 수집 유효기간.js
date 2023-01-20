function solution(today, terms, privacies) {
  const answer = [];
  [year, month, day] = today.split('.').map(Number);
    
  const todayNum = year * 12 * 28 + month * 28 + day;
  const termObj = {};
    
  terms.forEach((v) => {
    let [a, b] = v.split(" ");
    termObj[a] = Number(b);
  });
    
  privacies.forEach((v, i) => {
    [day, term] = v.split(" ");
    day = day.split(".").map(Number);
      
    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + termObj[term] * 28;
    if (dates <= todayNum) answer.push(i + 1);
  });
    
  return answer;
}