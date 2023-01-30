function solution(people, limit) {
    people.sort((a, b) => a - b); 
    // [20, 40, 60, 80, 100], 110
    //       i   j
    
    let i = 0; // 1 2
    for(let j = people.length - 1; i < j; j--) {
        if(people[i] + people[j] <= limit) i++;
    }
    
    return people.length - i;
}