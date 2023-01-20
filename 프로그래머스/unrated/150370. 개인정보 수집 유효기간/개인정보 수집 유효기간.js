function solution(today, terms, privacies) {
    const answer = [];
    [year, month, day] = today.split('.').map(Number);
      
    const todayNum = year * 12 * 28 + month * 28 + day;
    const termObj = {};
      
    terms.forEach((v) => {
        [agreement, validity] = v.split(" ");
        termObj[agreement] = Number(validity);
    });
      
    privacies.forEach((v, i) => {
        [getDate, agreement] = v.split(" ");
        getDate = getDate.split(".").map(Number);
        
        const canHave = getDate[0] * 12 * 28 + getDate[1] * 28 + getDate[2] + termObj[agreement] * 28;
        if (canHave <= todayNum) answer.push(i + 1);
    });
      
    return answer;
}
