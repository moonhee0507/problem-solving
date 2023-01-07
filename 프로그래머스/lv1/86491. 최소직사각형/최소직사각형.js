function solution(sizes) {    
    // [w, h]을 큰값-작은값으로 정렬
    sizes = sizes.map((item) => item.sort((a, b) => b - a));
    
    // w, h별 max 값 추출
    const w = sizes.map((item) => item[0]);
    const h = sizes.map((item) => item[1]);
    
    return Math.max(...w) * Math.max(...h);
}