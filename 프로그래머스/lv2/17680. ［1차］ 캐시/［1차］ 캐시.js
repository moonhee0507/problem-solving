function solution(cacheSize, cities) {
    cities = cities.map(v => v.toLowerCase());
    let memory = []; // 최대 길이는 캐시 사이즈만큼.
    let time = 0;
  
    for (let i = 0; i < cities.length; i++) {
        // memory에 cities[i]가 있는지 확인
        if (memory.includes(cities[i])) { // 있다 => 캐시힛
            // memory 순서 바꾸기: cities[i]를 없애고 끝에 push
            memory.splice(memory.indexOf(cities[i]), 1);
            memory.push(cities[i]);
            time++;
        } else { // 없다 => 캐시미스
            memory.push(cities[i]);
            if (memory.length > cacheSize) memory.shift();
            time += 5;
        }
    }
    
    return time;
}