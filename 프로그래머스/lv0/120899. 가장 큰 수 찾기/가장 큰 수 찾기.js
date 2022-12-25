function solution(array) {
    const maxNumber = [...array].sort((a, b) => b - a)[0];
    return [maxNumber, array.indexOf(maxNumber)];
}