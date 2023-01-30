// splice를 안쓰고 풀어야 효율성 테스트 통과됨

function solution(people, limit) {
    let count = 0;
    
    people = people.sort((a, b) => b - a); // [80, 70, 50, 50]
    
    let first = 0;
    let second = people.length - 1;
    
    while (first <= second) {
        // people[first]가 보트 제한 무게의 절반 이하가 되면, people[second]와 같이 구출시킬 수 있다
        // 남은 사람들은 모두 나눠 탈 수 있다
        if (people[first] <= limit / 2) {
            count += Math.ceil((second + 1 - first) / 2);
            break;
        }
        
        count++;
        
        switch (people[first] + people[second] <= limit) {
            case true:
                first++;
                second--;
                break;
            case false:
                first++;
                break;
        }
    }
    
    return count;
}