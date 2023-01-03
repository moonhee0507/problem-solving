function solution(A, B) {    
    const temp = (A + A).split(''); // ['h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o']
    
    let i = 0;
    while (i < [...temp].length) {
        //                          v
        // ['h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o']
        if (temp.slice(0 - A.length).join('') === B) {
            return i;
        }
        temp.pop();
        i++;
    }
    return -1;
}