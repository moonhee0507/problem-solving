function solution(n, t, m, p) {    
    let strAri = '';
    let i = 0;
    while (true) {
        strAri += i.toString(n);
        
        if (strAri.length >= m * t) break;
        else i++;
    }

    let answer = '';
    for (let j = p - 1; j < strAri.length; j += m) {
        answer += strAri[j];
        if (answer.length >= t) break;
    }
    
    return answer.toUpperCase();
}