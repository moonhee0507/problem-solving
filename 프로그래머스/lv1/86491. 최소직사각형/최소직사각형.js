function solution(sizes) {    
    const newSizes = sizes.map((size) => size.sort((a, b) => b - a));
    
    const arrNum1 = newSizes.map(([num1, num2]) => num1);
    const arrNum2 = newSizes.map(([num1, num2]) => num2);
    
    return Math.max(...arrNum1) * Math.max(...arrNum2);
}