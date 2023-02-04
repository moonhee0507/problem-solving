function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1 && citations[i] >= citations.length - i) {
            answer++;
            continue;
        }
        break;
    }

    return answer;
}