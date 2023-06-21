function solution(msg) {
    const dictionary = Array(26).fill().map((_, i) => String.fromCharCode(i + 65));
    
    const output = [];
    
    let i = 0;
    let j = 1;
    
    // 색인 만들기
    while (true) {
        if (j < msg.length) {
            const wc = msg.slice(i, j + 1);
            if (dictionary.includes(wc)) {
                j++;
            } else {
                dictionary.push(wc);
                output.push(dictionary.indexOf(msg.slice(i, j)) + 1);
                i = j;
                j = i + 1;
            }
        } else {
            // i에서부터 끝까지.
            const w = msg.slice(i, msg.length);
            output.push(dictionary.indexOf(w) + 1);
            break;
        }
        
    }
    
    return output;
}