function solution(babbling) {
    babbling = babbling.map(v => {
        if (v.match(/ayaaya|yeye|woowoo|mama/g)) {
            return false;
        } else return v;
    })
    
    
    for (let i = 0; i < babbling.length; i++) {
        if (babbling[i]) {
            babbling[i] = babbling[i].replace(/aya/g, '000');
            babbling[i] = babbling[i].replace(/ye/g, '00');
            babbling[i] = babbling[i].replace(/woo/g, '000');
            babbling[i] = babbling[i].replace(/ma/g, '00');
        }
    }

    return babbling.map(v => {
        if (v) {
            return v.replace(/0/g, '')
        } else return v;
    }).filter(v => v === '').length;
}