function solution(dots) {
    // 두 직선이 겹치는, 일치하는 경우 1
    if (dots.filter((v, i, self) => self.indexOf(v) === i).lngth === 2) return 1;
    
    dots = dots.sort((a, b) => a[0] - b[0]);
    const arrIncA = [];
    const arrIncB = [];
    
    for (let i = 0; i < dots.length; i++) {
        for (let j = i+1; j < dots.length; j++) {
            // 기울기 조합 구해서 arrInc에 보내기 [[-2/8, -8/-2], ...
            let temp = [...dots];
            arrIncA.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]))
            
            temp.splice(i, 1, []);
            temp.splice(j, 1, []);
            let arrRest = temp.filter((dot) => dot.length !== 0);
            
            arrIncB.push((arrRest[1][1] - arrRest[0][1]) / (arrRest[1][0] - arrRest[0][0]))
        }
    }
    
    // console.log(arrIncA, '\n', arrIncB)
    
    for (let i = 0; i < arrIncA.length; i++) {
        if (arrIncA[i] === arrIncB[i]) return 1;
    }
    
    return 0;
    
}