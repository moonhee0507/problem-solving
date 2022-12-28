function solution(chicken) {
    const obj = {};
    // obj = { freeChicken: , coupon: };

    obj.coupon = chicken;       // 쿠폰 수 할당
    obj.freeChicken = 0         // 공짜치킨 초기화
    
    // 쿠폰이 10장 이상이면 공짜치킨 최대한 많이 시킨다.
    while (obj.coupon >= 10) {
        let temp = Math.floor(obj.coupon / 10); // 주문할 수 있는 공짜치킨 수
        // 사용한 쿠폰 -처리, 주문한 만큼 +처리
        obj.coupon = obj.coupon - temp * 10 + temp; 
        obj.freeChicken += temp;
    }
    return obj.freeChicken;
}