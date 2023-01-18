function solution(survey, choices) {
    let result = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 };
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] !== 4) {
            [first, second] = survey[i];
            const table = [[first, 3], [first, 2], [first, 1], false
                           , [second, 1], [second, 2], [second, 3]];
            const select = table[choices[i]-1];
            result[select[0]] += select[1];
        }
    }
    
    result = Object.entries(result);
    let answer = '';
    
    for (let i = 0; i < result.length; i += 2) {
        result[i][1] < result[i+1][1] ? answer += result[i+1][0] : answer += result[i][0];
    }
    
    return answer;
}