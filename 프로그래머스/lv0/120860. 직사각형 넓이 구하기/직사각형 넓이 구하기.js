function solution(dots) {
    const arrayX = dots.map((dot) => dot[0]).sort((a, b) => a - b);
    const arrayY = dots.map((dot) => dot[1]).sort((a, b) => a - b);
    
    return (arrayX[3] - arrayX[0]) * (arrayY[3] - arrayY[0]);
}