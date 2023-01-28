function solution(n, words) {
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i][words[i].length - 1] === words[i+1][0]) {
            if (words.indexOf(words[i+1]) !== words.lastIndexOf(words[i+1])) {
                return [(words.lastIndexOf(words[i+1]) % n) + 1, Math.trunc(words.lastIndexOf(words[i+1]) / n) + 1];
            }
        } else return [((i + 1) % n) + 1, Math.trunc((i + 1) / n) + 1];
    }
    
    return [0, 0];
}