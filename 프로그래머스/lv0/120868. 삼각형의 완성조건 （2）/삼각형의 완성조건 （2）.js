function solution(sides) {
    // 가장 긴 변의 길이 < 다른 두 변의 길이의 합
    //       2                           1 + 2
    //       6                           3 + (4, 5, 6)
    //      [11                          7 + (5, 6, 7, 8, 9, 10, 11)
    //       12, 13, 14, 15, 16, 17     11 + 7]
    
    sides = sides.sort((a, b) => b - a);
    const answer = [];
    
    for (let i = 1; i <= sides[0]; i++) {
        if (i > sides[0] - sides[1]) answer.push(i);
    }
    
    for (let i = sides[0]+1; i < sides[0]+sides[1]; i++) {
        answer.push(i);
    }
    
    return answer.length;
}