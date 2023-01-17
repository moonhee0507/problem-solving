function solution(s) {
    //  
    // "abracadabra"
    //            i
    let same = 0; // 1
    let diff = 0; // 0
    let answer = 0; // 5
    let initialChar = s[0]; // a  r  c  d  b  a
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === initialChar) same++;
        else diff++;
        
        if (same === diff) {
            answer++;
            initialChar = s[i+1];
            same = 0;
            diff = 0;
        }
        
        if (i === s.length - 1) {
            if (same || diff) {
                answer++;
            }
        }
        
        
    }
    
    return answer;
}