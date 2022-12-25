function solution(array, height) {
    return [...array, height].sort((a, b) => b - a).indexOf(height);
}