function solution(order) {
    // 3, 6, 9의 개수만큼 박수 치기
    order = order.toString().split('').map((item) => parseInt(item));
    return order.filter((num) => num === 3 || num === 6 || num === 9).length;
}