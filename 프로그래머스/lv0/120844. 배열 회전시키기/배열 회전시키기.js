function solution(numbers, direction) {
    if (direction === "right") {
        const num = numbers.splice(-1);
        return [...num, ...numbers];
    } else if (direction === "left") {
        const num = numbers.splice(0, 1);
        numbers.push(...num);
        return numbers;
    }
}