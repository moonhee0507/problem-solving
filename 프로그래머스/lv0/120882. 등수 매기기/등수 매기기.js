function solution(score) {
    score = score.map((set) => (set[0] + set[1]) / 2);
    const arraySort = [...score].sort((a, b) => b - a);
    
    return score.map((avg) => arraySort.indexOf(avg) + 1);
}