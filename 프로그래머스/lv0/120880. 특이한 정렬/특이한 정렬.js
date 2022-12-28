function solution(numlist, n) {
    numlist = numlist.map((num) => [num, Math.abs(n - num)]).sort((a, b) => a[1] - b[1]);
    
    let obj = {};
    
    for (let i = 0; i < numlist.length; i++) {
        if (obj[numlist[i][1]] === undefined) obj[numlist[i][1]] = [numlist[i][0]];
        else obj[numlist[i][1]].push(numlist[i][0]);
    }
    
    let temp = Object.values(obj).map(((item) => item.sort((a, b) => b - a)));
    // [[4],[5,3],[6,2],[1]]
    
    const answer = [];
    for (let i = 0; i < temp.length; i++) {
        answer.push(...temp[i]);
    }
    
    return answer;
}